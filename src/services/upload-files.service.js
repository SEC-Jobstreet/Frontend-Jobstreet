/* eslint-disable prettier/prettier */

import http from "../http-common";

class UploadFilesService {
  // eslint-disable-next-line class-methods-use-this
  upload(file, onUploadProgress) {
    const formData = new FormData();

    formData.append("file", file);

    return http.post("/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();
