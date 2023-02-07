import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DispatchType, StateType } from "../../redux/configStore";
import { closeModal, openModal } from "../../hoc/Modal/modal";
import { useFormik } from "formik";
import * as yup from "yup";
import { EditUserModel, ProfileModel } from "../../Models/userModel/userModel";
import {
  changeAvatarAPI,
  profileAPI,
  updateProfileAPI,
} from "../../redux/userReducer/userReducer";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import useTag from "../../hooks/useTag";
import { profile } from "console";
import {
  USER_LOGIN,
  setStoreJson,
  getCookie,
  ACCESS_TOKEN,
  getStoreJson,
} from "../../util/config";

import avatarEmpty from "../../assets/img/avatar-empty.jpg";

type Props = {};

const ProfileLeft = (props: Props) => {
  let widthBrowser = window.innerWidth;
  const { userLogin } = useSelector((state: StateType) => state.userReducer);
  const [icon, setIcon] = useState<Boolean>(false);
  const [
    cert,
    skill,
    handleCertChange,
    handleSkillChange,
    handleDeleteCert,
    handleDeleteSkill,
  ] = useTag(userLogin);
  const regexName =
    /^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$/;
  const regexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
  const dispatch: DispatchType = useDispatch();
  const navigate = useNavigate();

  const formEdit = useFormik<EditUserModel>({
    initialValues: {
      id: 0,
      email: "",
      name: "",
      birthday: "",
      phone: "",
      certification: [],
      skill: [],
      gender: true,
    },
    validationSchema: yup.object().shape({
      name: yup
        .string()
        .required("Name cannot be blank.")
        .matches(regexName, "Name is invalid."),
      birthday: yup.string().required("Birthday cannot be blank."),
      phone: yup
        .string()
        .required("Phone cannot be blank.")
        .matches(regexPhone, "Phone is invalid."),
      gender: yup.string().required("Please select your gender."),
    }),
    onSubmit: (values: EditUserModel) => {
      const actionEdit = updateProfileAPI(values);
      dispatch(actionEdit);
      setStoreJson(USER_LOGIN, values);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    },
  });

  useEffect(() => {
    if (cert) {
      formEdit.setFieldValue("certification", cert);
    }
    if (skill) {
      formEdit.setFieldValue("skill", skill);
    }
  }, [cert, skill]);

  useEffect(() => {
    formEdit.setValues({ ...(userLogin as any) });
    setStoreJson(USER_LOGIN, userLogin);
  }, [userLogin]);

  useEffect(() => {
    widthBrowser < 767 ? setIcon(true) : setIcon(false);
  }, [widthBrowser]);

  const handleSelectGender = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    formEdit.values.gender = value === "true" ? true : false;
    formEdit.setValues({ ...formEdit.values });
  };

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    // const file = e?.target.files[0];
    const { files } = e.target as HTMLInputElement;
    const action = changeAvatarAPI((files as FileList)[0]);
    dispatch(action);
  };

  return (
    <div className="profile--left">
      <ToastContainer />
      <div className="info">
        <div className="top">
          <div className="avatar">
            <label htmlFor="file">
              <input type="file" id="file" onChange={handleChangeAvatar} />
              <div className="camera">
                <i className="bx bx-camera"></i>
              </div>
              {userLogin?.avatar ? (
                <img src={userLogin?.avatar} alt="avatar" />
              ) : (
                // <span>{userLogin?.name.slice(0, 1)}</span>
                <span>{userLogin?.name}</span>
              )}
            </label>
          </div>
          <div className="name">{userLogin?.name}</div>
          <div className="edit">
            {icon ? (
              <span>
                <i className="fa-solid fa-flag"></i>Report
              </span>
            ) : (
              <span onClick={() => openModal(".modal__edit-user")}>
                <i className="fa-solid fa-pencil"></i>
              </span>
            )}
          </div>
          <div className="preview">
            <a href="#">Preview Fiverr Profile</a>
          </div>
          <div className="status">Online</div>
        </div>
        <div className="bot">
          <div className="from">
            <div className="location">
              <span>
                <i className="fa-solid fa-location-dot"></i>
              </span>
              From
            </div>
            <div className="country">Vietnam</div>
          </div>
          <div className="since">
            <div className="member">
              <span>
                <i className="fa-solid fa-user"></i>
              </span>
              Member since
            </div>
            <div className="year">Jan 2023</div>
          </div>
        </div>
      </div>
      <div className="learn">
        <div className="learn--icon">
          <span>
            <img
              src="https://fiverr-res.cloudinary.com/image/upload/q_auto,f_png/v1/attachments/generic_asset/asset/6bef0aaa4d62dcf41383658e5e3211ee-1571214998624/fiverrlearn_logo.svg"
              alt="Learn from Fiverr"
            />
          </span>
        </div>
        <div className="learn--img">
          <img
            src="https://npm-assets.fiverrcdn.com/assets/@fiverr-private/fiverr_learn/enroll-icon.69b770f.svg"
            alt="..."
          />
        </div>
        <h5>Earn badges and stand out</h5>
        <p>Boost your sales, by boosting your expertise.</p>
        <a href="#">Enroll Now</a>
      </div>
      <div className="description">
        <div className="des">
          <div className="des-title">
            <span>Description</span>
            <span onClick={() => openModal(".modal__edit-user")}>
              <i className="fa-solid fa-pencil"></i>
            </span>
          </div>
          <div className="name">
            <span>Name:</span>
            <span>{userLogin?.name}</span>
          </div>
          <div className="phone">
            <span>Phone:</span>
            <span>{userLogin?.phone}</span>
          </div>
          <div className="birthday">
            <span>Birthday:</span>
            <span>{userLogin?.birthday}</span>
          </div>
        </div>

        <div className="language">
          <div className="des-title">
            <span>Languages</span>
            <span onClick={() => openModal(".modal__edit-user")}>
              <i className="fa-solid fa-pencil"></i>
            </span>
          </div>
        </div>
        <ul className="list">
          <li>
            <span>English</span> - <span>Basic</span>
          </li>
        </ul>
        <div className="account">
          <div>Linked Accounts</div>
          <ul>
            <li>
              <i className="fa-brands fa-facebook"></i>Facebook
            </li>
            <li>
              <i className="fa-brands fa-google"></i>Google
            </li>
            <li>
              <i className="fa-brands fa-dribbble"></i>Dribble
            </li>
            <li>
              <i className="fa-brands fa-stack-overflow"></i>Stack Overflow
            </li>
            <li>
              <i className="fa-brands fa-github"></i>Github
            </li>
            <li>
              <i className="fa-brands fa-vimeo"></i>Vimeo
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>Twitter
            </li>
          </ul>
        </div>
        <div className="skill">
          <div className="skill-wrap pb-2">
            <div className="des-title">
              <span>Skill</span>
              <span onClick={() => openModal(".modal__edit-user")}>
                <i className="fa-solid fa-pencil"></i>
              </span>
            </div>
          </div>
          {/* {userLogin?.skill.length !== 0 ? 
          <ul className="tag-item">
            {userLogin?.skill.map((item, i) => {
              return <li key={i}>{item}</li>
            })}
          </ul>
          :
          <div>Add your Skills.</div>
          } */}
          {userLogin?.skill ? (
            <ul className="tag-item">
              {userLogin?.skill.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          ) : (
            <div>Add your Skills.</div>
          )}
        </div>
        <div className="education">
          <div className="des-title pb-2">
            <span>Education</span>
            <span onClick={() => openModal(".modal__edit-user")}>
              <i className="fa-solid fa-pencil"></i>
            </span>
          </div>
          <ul className="tag-item">
            <li>Cybersoft</li>
          </ul>
        </div>
        <div className="certification">
          <div className="des-title pb-2">
            <span>Certification</span>
            <span onClick={() => openModal(".modal__edit-user")}>
              <i className="fa-solid fa-pencil"></i>
            </span>
          </div>
          {/* {userLogin?.certification.length !== 0 ? (
            <ul className="tag-item">
              {userLogin?.certification.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          ) : (
            <div>Add your Certification.</div>
          )} */}
          {userLogin?.certification ? (
            <ul className="tag-item">
              {userLogin?.certification.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
            </ul>
          ) : (
            <div>Add your Certification.</div>
          )}
        </div>
      </div>

      <div className="modal__edit-user">
        <div className="modal__edit-container">
          <div className="modal__edit-content">
            <div
              className="close-modal"
              onClick={() => {
                closeModal(".modal__edit-user");
              }}
            >
              <i className="bx bxs-x-square"></i>
            </div>
            <h2>Update User</h2>
            <form className="form" onSubmit={formEdit.handleSubmit}>
              <div className="form__content">
                <div className="form__input">
                  <div className="input-content">
                    <input
                      type="text"
                      name="email"
                      required
                      value={formEdit.values.email || ""}
                      disabled
                    />
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                  </div>
                </div>
                <div className="form__input">
                  <div className="input-content">
                    <input
                      type="text"
                      name="name"
                      required
                      value={formEdit.values.name || ""}
                      onChange={formEdit.handleChange}
                    />
                    <i className="fa-solid fa-user"></i>
                    <span>Name</span>
                  </div>
                  {formEdit.errors.name && (
                    <p className="messErr">{formEdit.errors?.name}</p>
                  )}
                </div>
                <div className="form__input">
                  <div className="input-content">
                    <input
                      type="date"
                      name="birthday"
                      required
                      value={formEdit.values.birthday || ""}
                      onChange={formEdit.handleChange}
                    />
                    <i className="bx bxs-cake"></i>
                    <span>Birthday</span>
                  </div>
                  {formEdit.errors.birthday && (
                    <p className="messErr">{formEdit.errors.birthday}</p>
                  )}
                </div>
                <div className="form__input">
                  <div className="input-content">
                    <input
                      type="text"
                      name="phone"
                      required
                      value={formEdit.values.phone || ""}
                      onChange={formEdit.handleChange}
                    />
                    <i className="fa-solid fa-phone"></i>
                    <span>Phone</span>
                  </div>
                  {formEdit.errors.phone && (
                    <p className="messErr">{formEdit.errors.phone}</p>
                  )}
                </div>
                <div className="form__input cert">
                  <div className="input-content">
                    <ul>
                      {cert?.map((item: string, i: number) => {
                        return (
                          <li key={i}>
                            <span>{item}</span>
                            <i
                              className="fa-solid fa-circle-xmark"
                              onClick={() => handleDeleteCert(item)}
                            ></i>
                          </li>
                        );
                      })}
                    </ul>
                    <input
                      type="text"
                      name="certification"
                      onKeyUp={handleCertChange}
                      onKeyPress={(e) => {
                        e.which === 13 && e.preventDefault();
                      }}
                    />
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Certification</span>
                  </div>
                </div>
                <div className="form__input skill">
                  <div className="input-content">
                    <ul>
                      {skill?.map((item: string, i: number) => {
                        return (
                          <li key={i}>
                            <span>{item}</span>
                            <i
                              className="fa-solid fa-circle-xmark"
                              onClick={() => handleDeleteSkill(item)}
                            ></i>
                          </li>
                        );
                      })}
                    </ul>
                    <input
                      type="text"
                      name="skills"
                      onKeyUp={handleSkillChange}
                      onKeyPress={(e) => {
                        e.which === 13 && e.preventDefault();
                      }}
                    />
                    <i className="fa-solid fa-code"></i>
                    <span>Skills</span>
                  </div>
                </div>
                <div className="form__gender">
                  <input
                    type="radio"
                    id="male"
                    name="gender"
                    value="true"
                    onChange={handleSelectGender}
                    checked={formEdit.values.gender}
                  />
                  <input
                    type="radio"
                    id="female"
                    name="gender"
                    value="false"
                    checked={!formEdit.values.gender}
                    onChange={handleSelectGender}
                  />
                  <div className="gender__tilte">
                    <i className="fa-solid fa-venus-mars"></i>
                    <span>Gender</span>
                  </div>
                  <div className="category">
                    <label htmlFor="male">
                      <span className="dot dot-male"></span>
                      <span className="gender">Male</span>
                    </label>
                    <label htmlFor="female">
                      <span className="dot dot-female"></span>
                      <span className="gender">Female</span>
                    </label>
                  </div>
                </div>
              </div>
              {formEdit.errors.gender && (
                <p className="messErr">{formEdit.errors.gender}</p>
              )}
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeft;
