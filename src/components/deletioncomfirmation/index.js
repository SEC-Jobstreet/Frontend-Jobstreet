/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/label-has-associated-control */
import "./index.css";

function DeletionConfirmation() {
  const handleSubmit = (e) => {
    const { value } = document.getElementById("idDeleteAccount");
    if (value === "xóa") {
      // eslint-disable-next-line no-alert
      alert("Bạn có muốn xóa tài khoản");
    } else {
      const txtWarningDelete = document.getElementById("txtWarningDelete");
      txtWarningDelete.classList.remove("hide");
    }
    e.preventDefault();
  };
  return (
    <div className="deleteAccount">
      <p className="titleDelete">Delete Account</p>
      <form className="formDelete" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idDeleteAccount">Nhập "xóa" để tiếp tục</label>
          <input type="text" name="idDeleteAccount" id="idDeleteAccount" />
          <span id="txtWarningDelete" className="hide">
            Tài khoản chưa được xóa. Xin vui lòng thử lại.
          </span>
        </div>
        <button type="submit" className="btnDelete">
          Xóa tài khoản
        </button>
      </form>
    </div>
  );
}

export default DeletionConfirmation;
