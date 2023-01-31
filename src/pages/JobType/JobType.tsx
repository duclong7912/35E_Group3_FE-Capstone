import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png';
import logo2 from '../../assets/img/logo2.png';
import logo3 from '../../assets/img/logo3.png';
import logo4 from '../../assets/img/logo4.png';
import logo5 from '../../assets/img/logo5.png';

type Props = {}

const JobType = (props: Props) => {
  const location = useLocation();
  console.log('type',location.pathname);
  
  return (
    <div className="jobtype">
      <div className="jobtype__container width-container">
        <div className="jobtype__content">
          <div className="banner">
            <h2>Graphics & Design</h2>
            <p>Designs to make you stand out.</p>
            <button>
              <span><svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="currentFill"><path fillRule="evenodd" clipRule="evenodd" d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8ZM5.742 11.778 11.655 8.3a.348.348 0 0 0 0-.6L5.742 4.222a.348.348 0 0 0-.525.3v6.956a.348.348 0 0 0 .525.3Z"></path></svg></span>
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
                  <img src={logo} alt="logo" />
                  <span className='info'>Minimalist Logo Design</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="popular__job-card">
                  <img src={logo2} alt="logo" />
                  <span className='info'>Architecture & Interior Design</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="popular__job-card">
                  <img src={logo3} alt="logo" />
                  <span className='info'>Website Design</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="popular__job-card">
                  <img src={logo4} alt="logo" />
                  <span className='info'>Illustration</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="popular__job-card">
                  <img src={logo5} alt="logo" />
                  <span className='info'>Image Editing</span>
                  <span><i className="fa-solid fa-arrow-right"></i></span>
                </div>
              </div>
            </div>
          </div>
          <div className="job__explore">
            <div className="explore__title">
              <h4>Explore Graphics & Design</h4>
            </div>
            <div className="explore__content row">
              <div className="explore__col col-xl-3 col-lg-4 col-sm-6 mb-4">
                <div className="explore__item">
                  <div className="explore__img">
                    <img src="./img/explore4.png" alt="explore" />
                  </div>
                  <div className="explore__info">
                    <h6>Logo & Brand Identity</h6>
                    <div className="explore-name">
                      <NavLink to='#'>Logo Design</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Brand Style Guides</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Fonts & Typography</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Business Cards & Stationery</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="explore__col col-xl-3 col-lg-4 col-sm-6 mb-4">
                <div className="explore__item">
                  <div className="explore__img">
                    <img src="./img/explore3.png" alt="explore" />
                  </div>
                  <div className="explore__info">
                    <h6>Web & App Design</h6>
                    <div className="explore-name">
                      <NavLink to='#'>Website Design</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>App Design</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>UX Design</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Landing Page Design</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Icon Design</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="explore__col col-xl-3 col-lg-4 col-sm-6 mb-4">
                <div className="explore__item">
                  <div className="explore__img">
                    <img src="./img/explore2.png" alt="explore" />
                  </div>
                  <div className="explore__info">
                    <h6>Art & Illustration</h6>
                    <div className="explore-name">
                      <NavLink to='#'>Illustration</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>NFT Art</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Pattern Design</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Portraits & Caricatures</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Cartoons & Comics</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Tattoo Design</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="explore__col col-xl-3 col-lg-4 col-sm-6 mb-4">
                <div className="explore__item">
                  <div className="explore__img">
                    <img src="./img/explore.png" alt="explore" />
                  </div>
                  <div className="explore__info">
                    <h6>Marketing Design</h6>
                    <div className="explore-name">
                      <NavLink to='#'>Logo Design</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Brand Style Guides</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Fonts & Typography</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Business Cards & Stationery</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="explore__col col-xl-3 col-lg-4 col-sm-6 mb-4">
                <div className="explore__item">
                  <div className="explore__img">
                    <img src="./img/explore4.png" alt="explore" />
                  </div>
                  <div className="explore__info">
                    <h6>Logo & Brand Identity</h6>
                    <div className="explore-name">
                      <NavLink to='#'>Logo Design</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Brand Style Guides</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Fonts & Typography</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                    <div className="explore-name">
                      <NavLink to='#'>Business Cards & Stationery</NavLink>
                      <i className="fa-solid fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="job__services">
            <div className="services__title">
              <h4>Services Related To Graphics & Design</h4>
            </div>
            <div className="services__tag">
              <span>Logo Design</span>
              <span>Minimalist logo design</span>
              <span>Mascot logo design</span>
              <span>3d logo design</span>
              <span>Hand drawn logo design</span>
              <span>Vintage logo design</span>
              <span>Photo restoration</span>
              <span>Product label design</span>
              <span>Custom twitch overlay</span>
              <span>Custom twitch emotes</span>
              <span>Children book illustration</span>
              <span>Instagram design</span>
              <span>Movie poster design</span>
              <span>Industrial & Product Design</span>
              <span>3D Modeling & Rendering</span>
              <span>Design for Manufacturing</span>
              <span>Technical Drawing</span>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default JobType