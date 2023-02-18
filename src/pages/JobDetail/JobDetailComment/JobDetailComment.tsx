import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Comment, PostComment } from "../../../Models/jobDetail/jobDetailModel";
import { DispatchType, StateType } from "../../../redux/configStore";
import avatarEmpty from "../../../assets/img/avatar-empty.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { postCommentApi } from "../../../redux/JobDetailReducer/JobDetailReducer";
type Props = {};

const JobDetailComment = (props: Props) => {
  const { arrComment } = useSelector(
    (state: StateType) => state.JobDetailReducer
  );
  const { userLogin } = useSelector((state: StateType) => state.userReducer);
  const navigate = useNavigate();
  const param = useParams();
  const dispatch: DispatchType = useDispatch();

  const postComment = () => {
    if (userLogin) {
      const day = new Date();

      const id = 1;
      const maCongViec = Number(param.id);
      const maNguoiBinhLuan = userLogin?.id;
      const ngayBinhLuan =
        day.getDate() + "/" + (day.getMonth() + 1) + "/" + day.getFullYear();
      const noiDung = (
        document.getElementById("input-comment") as HTMLInputElement
      ).value;
      const saoBinhLuan = 5;

      const value: PostComment = {
        id,
        maCongViec,
        maNguoiBinhLuan,
        ngayBinhLuan,
        noiDung,
        saoBinhLuan,
      };

      const actionAsync = postCommentApi(value);
      dispatch(actionAsync);

      (document.getElementById("input-comment") as HTMLInputElement).value = "";
    } else {
      navigate("/users/login");
    }
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();

    postComment();
  };
  return (
    <div className="jobdetail--comment">
      <ul>
        {arrComment.map((cmt: Comment, index: number) => {
          return (
            <li key={index}>
              <div className="item">
                <div className="item--top">
                  <div className="avatar">
                    {cmt?.avatar !== "" ? (
                      <img src={cmt.avatar} alt="..." />
                    ) : (
                      <img src={avatarEmpty} alt="..." />
                    )}
                  </div>
                  <div className="info">
                    <div className="name">{cmt.tenNguoiBinhLuan}</div>
                    <div className="country">
                      <div className="country--flag">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                          alt="..."
                        />
                      </div>
                      <div className="country--name">Việt Nam</div>
                    </div>
                  </div>
                </div>
                <div className="item--bot">
                  <div className="star--time">
                    <div className="star">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>5
                    </div>
                    <span></span>
                    <div className="time">{cmt.ngayBinhLuan}</div>
                  </div>
                  <div className="comment">{cmt.noiDung}</div>
                  <div className="helpful">
                    Helpful?{" "}
                    <span className="yes">
                      <i className="fa-regular fa-thumbs-up"></i> Yes
                    </span>{" "}
                    <span className="no">
                      <i className="fa-regular fa-thumbs-up"></i> No
                    </span>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="add--comment">
          <div className="image">
            {!userLogin ? 
              <img src={avatarEmpty} alt="..." className="test"/> : 
              userLogin.avatar ? <img src={userLogin?.avatar} alt="..."/> : 
              <label className="avatar">
                <span>{userLogin?.name.slice(0,1)}</span>
              </label>
            }
            {/* {userLogin?.avatar === "" ? (
              <img src={avatarEmpty} alt="..." className="test"/>
            ) : (
              <img src={userLogin?.avatar} alt="..."/>
            )} */}
          </div>
          <input
            id="input-comment"
            className="form-control"
            type="text"
            placeholder="Send comment..."
          ></input>
        </div>
        <button className="btn btn-primary">
          {userLogin ? "Send" : "Đăng nhập"}
        </button>
      </form>
    </div>
  );
};

export default JobDetailComment;
