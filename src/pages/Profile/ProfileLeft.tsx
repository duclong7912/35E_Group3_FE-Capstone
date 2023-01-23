import React from "react";

type Props = {};

const ProfileLeft = (props: Props) => {
  return (
    <div className="profile--left">
      <div className="info">
        <div className="top">
          <div className="avatar">
            <img src="https://picsum.photos/200" alt="..." />
          </div>
          <div className="name">tan1906</div>
          <div className="edit">
            <span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.3628 2.30102L13.6796 0.618553C12.8553 -0.205791 11.521 -0.205916 10.6965 0.618522L0.778434 10.4718L0.0102775 15.1279C-0.0733163 15.6346 0.365528 16.0736 0.872371 15.99L5.52846 15.2218L15.3824 5.30374C16.2052 4.4809 16.2131 3.15127 15.3628 2.30102ZM6.26384 9.7364C6.39809 9.87065 6.57406 9.93774 6.75 9.93774C6.92593 9.93774 7.1019 9.87065 7.23615 9.7364L10.9558 6.01671L11.8486 6.90949L6.5625 12.2301V10.9377H5.0625V9.43774H3.77012L9.09072 4.15165L9.9835 5.04443L6.26381 8.76408C5.9954 9.03258 5.9954 9.4679 6.26384 9.7364ZM2.56662 14.3169L1.6834 13.4336L2.06278 11.1341L2.63778 10.5627H3.9375V12.0627H5.4375V13.3624L4.86618 13.9375L2.56662 14.3169ZM14.4099 4.33146L14.4083 4.33305L14.4067 4.33465L12.9058 5.8454L10.1548 3.09446L11.6656 1.59352L11.6672 1.59196L11.6687 1.5904C11.9546 1.30458 12.418 1.30105 12.7073 1.59037L14.3903 3.2733C14.699 3.58196 14.7009 4.04046 14.4099 4.33146Z"></path>
              </svg>
            </span>
          </div>
          <div className="preview">
            <a href="#">Preview Fiverr Profile</a>
          </div>
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
      <div className="description">
        <div className="des">
          Description
          <a href="#" className="edit">
            Edit description
          </a>
        </div>
        <div className="des--content"></div>
        <div className="language">
          Language
          <a href="#" className="add">
            Add new
          </a>
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
              <i className="fa-solid fa-plus"></i>Facebook
            </li>
            <li>
              <i className="fa-solid fa-plus"></i>Google
            </li>
            <li>
              <i className="fa-solid fa-plus"></i>Dribble
            </li>
            <li>
              <i className="fa-solid fa-plus"></i>Stack Overflow
            </li>
            <li>
              <i className="fa-solid fa-plus"></i>Github
            </li>
            <li>
              <i className="fa-solid fa-plus"></i>Vimeo
            </li>
            <li>
              <i className="fa-solid fa-plus"></i>Twitter
            </li>
          </ul>
        </div>
        <div className="skill">
          <div>
            Skills<a href="#">Add new</a>
          </div>
          <div>Add your Skills.</div>
        </div>
        <div className="education">
          <div>
            Education<a href="#">Add new</a>
          </div>
          <div>Add your Education.</div>
        </div>
        <div className="certification">
          <div>
            Certification<a href="#">Add new</a>
          </div>
          <div>Add your Certification.</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeft;
