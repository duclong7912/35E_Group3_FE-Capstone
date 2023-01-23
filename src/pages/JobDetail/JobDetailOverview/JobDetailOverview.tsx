import React from "react";

type Props = {};

const JobDetailOverview = (props: Props) => {
  return (
    <div className="jobdetai--overview">
      <div className="nav">
        <ul>
          <li><a href="#">Progamming & Tech</a><svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path></svg></li>
          <li><a href="#">Web Progamming</a><svg width="8" height="16" viewBox="0 0 8 16" xmlns="http://www.w3.org/2000/svg"><path d="M0.772126 1.19065L0.153407 1.80934C0.00696973 1.95578 0.00696973 2.19322 0.153407 2.33969L5.80025 8L0.153407 13.6603C0.00696973 13.8067 0.00696973 14.0442 0.153407 14.1907L0.772126 14.8094C0.918563 14.9558 1.156 14.9558 1.30247 14.8094L7.84666 8.26519C7.99309 8.11875 7.99309 7.88131 7.84666 7.73484L1.30247 1.19065C1.156 1.04419 0.918563 1.04419 0.772126 1.19065Z"></path></svg></li>
          <li><a href="#">Web Application</a></li>
        </ul>
      </div>
      <h1>I will do web apps with PHP and mysql professionally</h1>
      <div className="foot">
        <div className="avatar">
          <img
            className="ziXAPIc"
            src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/59156914/original/preview.jpg"
          />
        </div>
        <div className="description">
          <div className="name">aimanas0409</div>
          <div className="level">Level 2 Seller</div>
          <div className="star">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <span> 5</span>
            <span>(485)</span>
          </div>
          <div className="order">2 Orders in Queue</div>
          <div className="choice"></div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailOverview;
