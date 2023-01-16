import React from "react";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const HomeCarousel = (props: Props) => {
  const slickSettings: Settings = {
    fade: true,
    cssEase: "linear",
    autoplay: true,
    autoplaySpeed: 8 * 1000,
  };

  // const handleSubmit = (e:any) => {
  //   e.preventDefault();
  // }

  return (
    <div className="home--carousel">
      <Slick {...slickSettings}>
        <div className="home--carousel__item">
          <img className="" src="./img/carousel-1.png" alt="..." />
          <div className="tag">
            <div className="star"></div>
            <div className="name">
              Andrea, <span>Fashion Desinger</span>
            </div>
          </div>
        </div>
        <div className="home--carousel__item">
          <img className="" src="./img/carousel-2.png" alt="..." />
          <div className="tag">
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="name">
              Moon, <span>Marketing Expert</span>
            </div>
          </div>
        </div>
        <div className="home--carousel__item">
          <img className="" src="./img/carousel-3.png" alt="..." />
          <div className="tag">
            <div className="star"></div>
            <div className="name">
              Ritika, <span>Shoemaker and Designer</span>
            </div>
          </div>
        </div>
        <div className="home--carousel__item">
          <img className="" src="./img/carousel-4.png" alt="..." />
          <div className="tag">
            <div className="star"></div>
            <div className="name">
              Zach, <span>Bar Owner</span>
            </div>
          </div>
        </div>
        <div className="home--carousel__item">
          <img className="" src="./img/carousel-5.png" alt="..." />
          <div className="tag">
            <div className="star">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <div className="name">
              Gabrielle, <span>Video Editor</span>
            </div>
          </div>
        </div>
      </Slick>
      <div className="home-carousel__search width-container">
        <div className="search--content">
          <p>
            Find the perfect<i> freelance </i>
          </p>
          <p>services for your business</p>
          <form>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              className="form-control"
              type="search"
              placeholder='Try "building mobile app" '
            />
            <button className="btn btn-success">Search</button>
          </form>
          <div className="popular">
            Popular:
            <ul>
              <li>
                <a href="#">Website Design</a>
              </li>
              <li>
                <a href="#">WordPress</a>
              </li>
              <li>
                <a href="#">Logo Design</a>
              </li>
              <li>
                <a href="#">Video Editing</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
