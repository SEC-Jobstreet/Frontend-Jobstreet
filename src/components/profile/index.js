import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ReactGoogleAutocomplete from "react-google-autocomplete";
import ReactPhoneInput from "react-phone-input-2";

import "react-datepicker/dist/react-datepicker.css";
import "react-phone-input-2/lib/style.css";
import "./profile-style.css";

function Profile() {
  const [showContainer, setShowContainer] = useState(true);

  const handleSpecificTimeButtonClick = () => {
    setShowContainer(true);
    const specificTimeButton = document.getElementById("specific-time-button");
    if (specificTimeButton !== null) {
      specificTimeButton.classList.add("selected");
    }

    const anytimeButton = document.getElementById("anytime-button");
    if (anytimeButton !== null) {
      anytimeButton.classList.remove("selected");
    }
  };

  const handleAnytimeButtonClick = () => {
    setShowContainer(false);
    const specificTimeButton = document.getElementById("specific-time-button");
    if (specificTimeButton !== null) {
      specificTimeButton.classList.remove("selected");
    }

    const anytimeButton = document.getElementById("anytime-button");
    if (anytimeButton !== null) {
      anytimeButton.classList.add("selected");
    }
  };
  const [privacyOption, setPrivacyOption] = useState(null); // Initial state

  const handleOptionChangePrivacy = (option) => {
    setPrivacyOption(option);
  };
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra xem các trường đã được điền hay không
    if (firstName.trim() === "") {
      setFirstNameError(true);
    }

    if (lastName === "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };
  const [phone, setPhone] = useState("");
  const [currentRole, setCurrentRole] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [aboutMe, setAboutMe] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [shiftAvailability, setShiftAvailability] = useState([
    { day: "Mon", morning: false, afternoon: false, evening: false },
    { day: "Tue", morning: false, afternoon: false, evening: false },
    { day: "Wed", morning: false, afternoon: false, evening: false },
    { day: "Thu", morning: false, afternoon: false, evening: false },
    { day: "Fri", morning: false, afternoon: false, evening: false },
    { day: "Sat", morning: false, afternoon: false, evening: false },
    { day: "Sun", morning: false, afternoon: false, evening: false },
  ]);

  const [setFileInputValue, fileInputValue] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileInputValue(file.name);
    // Xử lý tệp tin ở đây
  };

  const handleCurrentRoleChange = (event) => {
    setCurrentRole(event.target.value);
  };

  const handleChange = (event) => {
    setAboutMe(event.target.value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleShiftChange = (day, shift) => {
    const updatedShiftAvailability = [...shiftAvailability];
    updatedShiftAvailability[day][shift] =
      !updatedShiftAvailability[day][shift];
    setShiftAvailability(updatedShiftAvailability);
  };

  return (
    <form method="post" action="" id="" onSubmit={handleSubmit}>
      <div className="relative-common">
        <div className="profile">
          <h2>
            <b>Tạo hồ sơ</b>
          </h2>
        </div>

        <div className="text">Tên</div>
        <input
          type="text"
          className={`combined-class ${firstNameError ? "border-red-500" : ""}`}
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        {firstNameError && <div className="text-red-500">Mục này bắt buộc</div>}
        <div className="text">Họ</div>
        <input
          type="text"
          className={`combined-class ${lastNameError ? "border-red-500" : ""}`}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        {lastNameError && <div className="text-red-500">Mục này bắt buộc</div>}
        <div className="text">Số điện thoại</div>
        <ReactPhoneInput
          country="vn"
          value={phone}
          onChange={(value) => {
            setPhone(value);
          }}
          inputStyle={{
            width: "534px",
            height: "48px",
          }}
          buttonStyle={{
            backgroundColor: "transparent",
          }}
          className="input-phone-number"
        />
        <div>
          <div className="addres">Địa chỉ</div>
          <ReactGoogleAutocomplete
            apiKey="YOUR_GOOGLE_MAPS_API_KEY"
            className="combined-class"
            required
          />
          <span role="status" className="custom-span" data-dd-privacy="allow">
            Chia sẻ địa chỉ của bạn để xem được nhiều hơn các vị trí gần đó. Chỉ
            tên huyện/tỉnh sẽ hiển thị trên hồ sơ của bạn.
          </span>
        </div>

        <fieldset name="workEligibility">
          <legend className="part4">
            Điều nào sau đây miêu tả đúng nhất thị thực làm việc của bạn ở Việt
            Nam?
          </legend>
          <div role="radiogroup" className="radio">
            <div>
              <div>
                <input
                  type="radio"
                  name="workEligibility"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />

                <span className="part4b">
                  Tôi <b>không phải</b> là Công dân hay Thường trú nhân của Việt
                  Nam và tôi cần Nhà tuyển dụng nộp đơn xin giấy phép lao
                  động/giấy phép/visa cho tôi.
                </span>
              </div>
            </div>
            <div className="">
              <div>
                <input
                  type="radio"
                  name="workEligibility"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                <span className="part4b">
                  Tôi là Công dân, Thường trú nhân hoặc có tư cách tương tự ở
                  Việt Nam và sẽ không cần Nhà tuyển dụng nộp đơn xin giấy phép
                  lao động/giấy phép/visa cho tôi.
                </span>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="divider" />
        <div>
          <div className="part4a">Tuyển dụng tôi vì (tùy chọn)</div>
          <textarea
            rows="4"
            name="aboutMe"
            id="aboutMe"
            placeholder="Hãy cho chúng tôi biết điều gì khiến bạn nổi bật!
Ví dụ: Tôi là nhân viên thư ký có 3 năm kinh nghiệm, gõ thành thạo 60 từ một phút và có chứng chỉ MS Excel"
            className=" fill border rounded p-4 text-current text-base dark:bg-grey-800 placeholder:text-grey-600  disabled:bg-grey-50 disabled:border-green-200 disabled:cursor-not-allowed border-grey-400 "
            value={aboutMe}
            onChange={handleChange}
          />
          <p
            arialabel="character-counter"
            className=" text-right text-grey-600 dark:text-grey-400"
          >
            Số ký tự tối đa: {300 - aboutMe.length}
          </p>
        </div>

        <div className="divider" />
        <div className>
          <div>
            <div className="part4a">Chức danh hiện tại (tùy chọn)</div>
            <input
              type="text"
              id="currentRole"
              name="currentRole"
              className=" border-part5 w-full border rounded h-12 pl-4 text-current text-base dark:bg-grey-800 placeholder:text-grey-600 focus:outline-none disabled:bg-grey-50 disabled:border-green-200 disabled:cursor-not-allowed border-grey-400 focus:border-green-700"
              value={currentRole}
              onChange={handleCurrentRoleChange}
            />
          </div>
          <div>
            <hr className="my-8 h-px border-t-grey-100" />
          </div>
          {currentRole && (
            <div className="relative-common">
              <div className="part4a">
                Ngày bắt đầu vị trí hiện tại (tùy chọn)
              </div>
              <DatePicker
                id="startDate"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
                className="border-part5 w-full border rounded h-12 pl-4 text-current text-base dark:bg-grey-800 placeholder:text-grey-600 focus:outline-none disabled:bg-grey-50 disabled:border-green-200 disabled:cursor-not-allowed border-grey-400 focus:border-green-700"
              />
            </div>
          )}
        </div>
        <div className="divider" />
        <legend className="font-bold pb-6">Ca làm việc có thể</legend>
        <div className="row">
          <div className="cell">
            <button
              type="button"
              className=" button-select  selected "
              onClick={handleSpecificTimeButtonClick}
            >
              Thời gian cụ thể
            </button>
          </div>
          <div className="cell">
            <button
              type="button"
              className="button-select"
              onClick={handleAnytimeButtonClick}
            >
              Bất cứ lúc nào
            </button>
          </div>
        </div>
        {showContainer && (
          <div className="">
            <div className="part7">
              <div className="row">
                <div className="cell part7a">All</div>
                <div className="cell">
                  <input
                    type="checkbox"
                    checked={shiftAvailability.every((day) => day.morning)}
                    onChange={() => {
                      const updatedShiftAvailability = shiftAvailability.map(
                        (day) => ({
                          ...day,
                          morning: !day.morning,
                        })
                      );
                      setShiftAvailability(updatedShiftAvailability);
                    }}
                  />
                </div>
                <div className="cell">
                  <input
                    type="checkbox"
                    checked={shiftAvailability.every((day) => day.afternoon)}
                    onChange={() => {
                      const updatedShiftAvailability = shiftAvailability.map(
                        (day) => ({
                          ...day,
                          afternoon: !day.afternoon,
                        })
                      );
                      setShiftAvailability(updatedShiftAvailability);
                    }}
                  />
                </div>
                <div className="cell">
                  <input
                    type="checkbox"
                    checked={shiftAvailability.every((day) => day.evening)}
                    onChange={() => {
                      const updatedShiftAvailability = shiftAvailability.map(
                        (day) => ({
                          ...day,
                          evening: !day.evening,
                        })
                      );
                      setShiftAvailability(updatedShiftAvailability);
                    }}
                  />
                </div>
              </div>
              <div className="row">
                <div className="cell part7a" />
                <div className="cell">Sáng</div>
                <div className="cell">Chiều</div>
                <div className="cell">Tối</div>
              </div>
              {shiftAvailability.map((shifts, index) => (
                <div className="row" key={index.id}>
                  <div className="cell">{shifts.day}</div>
                  <div className="cell">
                    <input
                      type="checkbox"
                      checked={shifts.morning}
                      onChange={() => handleShiftChange(index, "morning")}
                    />
                  </div>
                  <div className="cell">
                    <input
                      type="checkbox"
                      checked={shifts.afternoon}
                      onChange={() => handleShiftChange(index, "afternoon")}
                    />
                  </div>
                  <div className="cell">
                    <input
                      type="checkbox"
                      checked={shifts.evening}
                      onChange={() => handleShiftChange(index, "evening")}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="divider" />
        <fieldset name="privacySetting">
          <legend className="font-bold pb-6">Cài đặt Bảo Mật</legend>
          <div role="radiogroup" className="">
            <div className="group">
              <div className="part4a items-top my-2 flex cursor-pointer flex-row gap-3 text-sm">
                <input
                  type="radio"
                  name="privacyOption"
                  value="allow"
                  checked={privacyOption === "allow"}
                  onChange={() => handleOptionChangePrivacy("allow")}
                />
                <span>Chia sẻ hồ sơ</span>
                <span className="part6 inline-block bg-purple-100 px-2 py-1 text-2xs text-grey-900">
                  Gợi ý
                </span>
              </div>
              <span className="part6b text-grey-600">
                Nhà tuyển dụng có thể xem hồ sơ của tôi và liên hệ với tôi về
                các cơ hội việc làm tiềm năng.
              </span>
            </div>

            <div className="group">
              <div className="part4a items-top my-2 flex cursor-pointer flex-row gap-3 text-sm">
                <input
                  type="radio"
                  name="privacyOption"
                  value="deny"
                  checked={privacyOption === "deny"}
                  onChange={() => handleOptionChangePrivacy("deny")}
                />
                <span>Không chia sẻ hồ sơ</span>
              </div>
              <span className="part6b my-1 text-xs text-grey-600">
                Hồ sơ của tôi chỉ có thể được nhìn thấy bởi nhà tuyển dụng khi
                nộp đơn ứng tuyển.
              </span>
            </div>
          </div>
        </fieldset>

        <div className="divider" />
        <div>
          <h6 className="font-bold text-xl pb-6">Sơ yếu lý lịch</h6>

          <div
            role="button"
            tabIndex={0}
            className="  button-update"
            onClick={() => document.getElementById("fileInput").click()}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                document.getElementById("fileInput").click();
              }
            }}
          >
            Cập nhật dữ liệu
            <input
              id="fileInput"
              accept="application/pdf,.pdf,application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx"
              type="file"
              style={{ display: "none" }}
              tabIndex="-1"
              onChange={handleFileChange}
            />
          </div>
          <input
            type="hidden"
            id="resume"
            name="resume"
            value={fileInputValue}
          />
          <p className="type-document" data-dd-privacy="allow">
            Loại tập tin: .pdf, .doc, .docx. Kích thước tối đa của tệp: 4.3 MB.
          </p>
          <div className="mt-8">
            <div className="flex gap-2">
              <button
                className=" button-last text-center rounded flex items-center justify-center focus:outline-none focus:ring whitespace-nowrap bg-white dark:bg-grey-900 border-green-700 text-green-700 hover:text-green-600 hover:border-green-600 active:text-green-800 active:border-green-800 active:bg-green-200 dark:active:bg-grey-800 disabled:border-none disabled:bg-green-200 disabled:text-green-600 disabled:cursor-not-allowed text-base  text-center"
                type="button"
                data-dd-privacy="allow"
              >
                Hủy bỏ
              </button>
              <button
                className="button-last text-center rounded flex items-center justify-center focus:outline-none focus:ring whitespace-nowrap bg-green-700 text-white hover:bg-green-600 active:bg-green-800 disabled:bg-green-200 disabled:text-green-600 disabled:cursor-not-allowed text-base "
                type="submit"
                data-dd-privacy="allow"
              >
                Tạo hồ sơ
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Profile;
