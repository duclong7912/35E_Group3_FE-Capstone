import React from "react";

type Props = {};

const HomeTrust = (props: Props) => {
  return (
    <div className="home--trust">
      <div className="home--trust__content width-container">
      <div className="home--trust__text">Trusted by:</div>
      <div className="home--trust__comp">
        <ul className="d-flex">
          <li>
            <picture>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png"
                alt="facebook"
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
                alt="Google"
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
                alt="NETFLIX"
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png"
                alt="P&amp;G"
              />
            </picture>
          </li>
          <li>
            <picture>
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
                alt="PayPal"
              />
            </picture>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default HomeTrust;
