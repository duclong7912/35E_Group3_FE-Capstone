import React from 'react'

type Props = {}

const JobType = (props: Props) => {
  return (
    <div className="jobtype">
      <div className="jobtype__container width-container">
        <div className="jobtype__content">
          <div className="banner">
            <h2>Graphics & Design</h2>
            <p>Designs to make you stand out.</p>
            <button>
              <span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"></path></svg></span>
              <span>How Fiverr Works</span>
            </button>
          </div>
          <div className="popular__job">
            <div className="popular__job-title">
              <h4>Most popular in Graphics & Design</h4>
            </div>
            <div className="popular__job-wrapper">
              <div className="popular__job-content">
                <div className="popular__job-card">
                  <img src="./img/logo.png" alt="logo" />
                  <span className='info'>Minimalist Logo Design</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="popular__job-card">
                  <img src="./img/logo2.png" alt="logo" />
                  <span className='info'>Architecture & Interior Design</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="popular__job-card">
                  <img src="./img/logo3.png" alt="logo" />
                  <span className='info'>Website Design</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="popular__job-card">
                  <img src="./img/logo4.png" alt="logo" />
                  <span className='info'>Illustration</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="popular__job-card">
                  <img src="./img/logo5.png" alt="logo" />
                  <span className='info'>Image Editing</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobType