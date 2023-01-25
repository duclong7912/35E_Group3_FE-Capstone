import React from "react";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const HomeSlideService = (props: Props) => {
  

  const settings = {
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      
    ],
  }

  return (
    <div className="home--service">
      <div className="home--service__content">
        <h6 className="home--component__text">Popular professional services</h6>
        <Slick {...settings}>
          <div className="item">
            <div className="item--content">
              <img
                alt="Logo Design"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/logo-design-2x.png"
              />
              <h5>
                <p>Build your brand</p>Logo Design
              </h5>
            </div>
          </div>
          <div className="item">
            <div className="item--content">
              <img
                alt="WordPress"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/ae11e2d45410b0eded7fba0e46b09dbd-1598561917003/wordpress-2x.png"
              />
              <h5>
                <p>Customize your site</p>WordPress
              </h5>
            </div>
          </div>
          <div className="item">
            <div className="item--content">
              <img
                alt="Voice Over"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741669/voiceover-2x.png"
              />
              <h5>
                <p>Share your message</p>Voice Over
              </h5>
            </div>
          </div>
          <div className="item">
            <div className="item--content">
              <img
                alt="Video Explainer"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741663/animated-explainer-2x.png"
              />
              <h5>
                <p>Engage your audience</p>Video Explainer
              </h5>
            </div>
          </div>
          <div className="item">
            <div className="item--content">
              <img
                alt="Social Media"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741667/social-2x.png"
              />
              <h5>
                <p>Reach more customers</p>Social Media
              </h5>
            </div>
          </div>
          <div className="item">
            <div className="item--content">
              <img
                alt="SEO"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741668/seo-2x.png"
              />
              <h5>
                <p>Unlock growth online</p>SEO
              </h5>
            </div>
          </div>
          <div className="item">
            <div className="item--content">
              <img
                alt="Illustration"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/illustration-2x.png"
              />
              <h5>
                <p>Color your dreams</p>lllustration
              </h5>
            </div>
          </div>
          <div className="item">
            <div className="item--content">
              <img
                alt="Translation"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741674/translation-2x.png"
              />
              <h5>
                <p>Go global</p>Translation
              </h5>
            </div>
          </div>
          <div className="item">
            <div className="item--content">
              <img
                alt="Data Entry"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741664/data-entry-2x.png"
              />
              <h5>
                <p>Learn your business</p>Data Entry
              </h5>
            </div>
          </div>
          <div className="item">
            <div className="item--content">
              <img
                alt="Book Covers"
                src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_550,dpr_1.0/v1/attachments/generic_asset/asset/055f758c1f5b3a1ab38c047dce553860-1598561741678/book-covers-2x.png"
              />
              <h5>
                <p>Showcase your story</p>Book Covers
              </h5>
            </div>
          </div>
        </Slick>
      </div>
    </div>
  );
};

export default HomeSlideService;
