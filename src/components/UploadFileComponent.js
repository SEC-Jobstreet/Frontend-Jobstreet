/* eslint-disable prettier/prettier */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */

import React, { Component } from "react";
import Dropzone from "react-dropzone";

import UploadService from "../services/upload-files.service";

export default class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.upload = this.upload.bind(this);
    this.onDrop = this.onDrop.bind(this);

    this.state = {
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: "",
      fileInfos: [],
      uploadSuccess: false,
    };
  }

  componentDidMount() {
    UploadService.getFiles().then((response) => {
      this.setState({
        fileInfos: response.data,
      });
    });
  }

  // eslint-disable-next-line react/sort-comp
  upload() {
    // eslint-disable-next-line react/destructuring-assignment, react/no-access-state-in-setstate
    const currentFile = this.state.selectedFiles[0];

    this.setState({
      progress: 0,
      currentFile,
    });

    UploadService.upload(currentFile, (event) => {
      this.setState({
        progress: Math.round((100 * event.loaded) / event.total),
      });
    })
      .then((response) => {
        this.setState({
          message: response.data.message,
          uploadSuccess: true,
          currentFile: undefined,
          selectedFiles: undefined,
        });
        return UploadService.getFiles();
      })
      .then((files) => {
        this.setState({
          fileInfos: files.data,
        });
      })
      .catch(() => {
        this.setState({
          progress: 0,
          message: "Could not upload the file!",
          currentFile: undefined,
          selectedFiles: undefined,
          uploadSuccess: false,
        });
      });
  }


  onDrop(files) {
    const maxFileSize = 4.3 * 1024 * 1024; // 4.3 MB in bytes
    const acceptedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (files.length > 0) {
      const file = files[0];
      if (acceptedFileTypes.includes(file.type) && file.size <= maxFileSize) {
        this.setState({ selectedFiles: files, uploadSuccess: false, currentFile: file, progress: 0, message: "" });
      } else if (file.size > maxFileSize) {
        this.setState({ message: "File is too large. Max size is 4.3 MB.", uploadSuccess: false });
      } else {
        this.setState({ message: "Invalid file type. Only .pdf, .doc, .docx files are allowed.", uploadSuccess: false });
      }
    }
  }

  render() {
    const { selectedFiles, currentFile, progress, message, fileInfos, uploadSuccess } = this.state;

    return (
      <div>
        {currentFile && (
          <div className="progress mb-3">
            <div
              className="progress-bar progress-bar-info progress-bar-striped"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: `${progress}%` }}
            >
              {progress}%
            </div>
          </div>
        )}

        <Dropzone onDrop={this.onDrop} multiple={false}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                {selectedFiles && selectedFiles[0].name ? (
                  <div className="selected-file">
                    {selectedFiles && selectedFiles[0].name}
                  </div>
                ) : (
                  <button
                    className="btn btn-success"
                    disabled={selectedFiles}
                  >
                    Cập nhật dữ liệu
                  </button>
                )}
                <p className="file-types">
                  Loại tập tin: .pdf, .doc, .docx. Kích thước tối đa của tệp: 4.3 MB.
                </p>
              </div>
              <aside className="selected-file-wrapper" />
            </section>
          )}
        </Dropzone>

        {uploadSuccess && (
          <button className="btn btn-secondary" onClick={() => this.setState({ selectedFiles: undefined, uploadSuccess: false })}>
            Tải một tệp khác
          </button>
        )}

        <div className="alert alert-light" role="alert">
          {message}
        </div>

        {fileInfos.length > 0 && (
          <div className="card">
            <div className="card-header">List of Files</div>
            <ul className="list-group list-group-flush">
              {fileInfos.map((file, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}