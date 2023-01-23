import React from 'react'

type Props = {}

const JobDetailAboutSeller = (props: Props) => {
  return (
    <div className="aboutseller">
        <h2>About The Seller</h2>
        <div className="top">
          <div className="img">
            <img src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/profile/photos/59156914/original/preview.jpg" />
          </div>
          <div className="info">
            <h6>almanas0409</h6>
            <p>
              I am a Software Engineer and a BEST WEB DESIGNER and DEVELOPER
            </p>
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>5<span>(493)</span>
            </div>
            <button className="btn">Contact me</button>
          </div>
        </div>
        <div className="bot">
          <ul>
            <li>From<strong>Paskistan</strong></li>
            <li>Member since<strong>Feb 2017</strong></li>
            <li>Avg. response time<strong>1 hour</strong></li>
            <li>Last delivery<strong>about 10 hours</strong></li>
            
          </ul>
          <div className="article">
            Hello Fiver I am ANAS! I am best Web developer and Application
            Developer with experience of 5 Years and now doing Freelance Work so
            If you want best websites and Web Apps so feel free to Contact me. I
            am a software engineer so i can do much more things so contact me I
            will never DISAPPOINT YOU.
          </div>
        </div>
      </div>
  )
}

export default JobDetailAboutSeller