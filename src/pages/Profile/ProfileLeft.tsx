import React, { useEffect, useState } from "react";

type Props = {};

const ProfileLeft = (props: Props) => {
  let widthBrowser = window.innerWidth;
  const [icon, setIcon] = useState<Boolean>(false);

  useEffect(() => {
    widthBrowser < 767 ? setIcon(true) : setIcon(false);
  }, [widthBrowser]);

  return (
    <div className="profile--left">
      <div className="info">
        <div className="top">
          <div className="avatar">
            <img src="https://picsum.photos/200" alt="..." />
          </div>
          <div className="name">tan1906</div>
          <div className="edit">
            {icon ? (
              <span>
                <i className="fa-solid fa-flag"></i>Report
              </span>
            ) : (
              <span>
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
          <span>Description</span>
          <a href="#" className="edit">
            Edit description
          </a>
          <div className="name">
            <span>Name:</span>
            <span>Ngoc</span>
          </div>
          <div className="phone">
            <span>Phone:</span>
            <span>1234567890</span>
          </div>
          <div className="birthday">
            <span>Birthday:</span>
            <span>01-01-2000</span>
          </div>
        </div>

        {/* <div className="des--content"></div> */}
        <div className="language">
          Languages
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
