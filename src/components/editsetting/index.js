/* eslint-disable jsx-a11y/label-has-associated-control */
import "./index.css";

function EditSetting() {
  const handleSubmit = (e) => {
    // handle email null
    const email = document.getElementById("inpEmail").value;
    const nofEmail = document.getElementById("nofEmail");
    if (email === "") {
      nofEmail.classList.remove("hide");
    } else {
      nofEmail.classList.add("hide");
    }

    // handle password null or wrong
    const nofPassword = document.getElementById("nofPassword");
    const txtWarningPassword = document.getElementById("txtWarningPassword");
    const newPassword = document.getElementById("inpNewPassword").value;
    e.preventDefault();
    if (newPassword === "") {
      nofPassword.classList.remove("hide");
      txtWarningPassword.innerHTML = "Mật khẩu không được để trống";
    } else {
      nofPassword.classList.remove("hide");
      txtWarningPassword.innerHTML = "Mật khẩu không chính xác";
    }
  };
  return (
    <div className="editSetting">
      <p className="titleEdit">Edit Setting</p>
      <form id="myFrom" onSubmit={handleSubmit}>
        <div className="groupForm">
          <label htmlFor="inpEmail">Địa chỉ email</label>
          <input
            type="email"
            className="inp"
            id="inpEmail"
            name="inpEmail"
            placeholder="Nhập email của bạn"
          />
          <p className="txtWarning hide" id="nofEmail">
            <span className="txtWarningEmail">
              Địa chỉ email không thể để trắng
            </span>
          </p>
        </div>
        <div className="groupForm">
          <label htmlFor="inpPassword">Mật khẩu</label>
          <input
            type="password"
            className="inp"
            id="inpPassword"
            name="inpPassword"
            placeholder="Nhập mật khẩu"
          />
          <span>Để trống nếu bạn không muốn thay đổi</span>
        </div>
        <div className="groupForm">
          <label htmlFor="inpNewPassword">Mật khẩu hiện tại</label>
          <input
            type="password"
            className="inp"
            id="inpNewPassword"
            name="inpNewPassword"
            placeholder="Nhập mật khẩu"
          />
          <span>Chúng tôi cần mật khẩu của bạn để lưu thông tin thay đổi</span>
          <p className="txtWarning hide" id="nofPassword">
            <span id="txtWarningPassword" />
          </p>
        </div>
        <div className="groupButton">
          <button type="submit" className="btnSubmit">
            Lưu tài khoản
          </button>
          <button type="button" className="btnCancel">
            Hủy
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditSetting;
