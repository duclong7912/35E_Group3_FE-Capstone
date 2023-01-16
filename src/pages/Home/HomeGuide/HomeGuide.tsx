import React from "react";

type Props = {};

const HomeGuide = (props: Props) => {
  return (
    <div className="home--guide">
      <div className="home--guide__content">
        <h6 className="home--component__text">Fiver guides</h6>
        <div className="content--top">
          <div className="item">
            <div className="item--content">
              <a href="#">
                <img
                  alt="Start an online business and work from home"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png"
                />
                <h6>Start an online business and work from home</h6>
                <p>A complete guide to starting a small business online</p>
              </a>
            </div>
          </div>

          <div className="item">
            <div className="item--content">
              <a href="#">
                <img
                  alt="Digital marketing made easy"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png"
                />
                <h6>Start an online business and work from home</h6>
                <p>A complete guide to starting a small business online</p>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="item--content">
              <a href="#">
                <img
                  alt="Create a logo for your business"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png"
                />
                <h6>Start an online business and work from home</h6>
                <p>A complete guide to starting a small business online</p>
              </a>
            </div>
          </div>
          <div className="seemore">
            <a href="#">See More Guides {">"}</a>
          </div>
        </div>
        <div className="content--bot">
          <img
            alt="The talent you need"
            src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png"
          />
          <div className="bot__text">
            <h2>
              Find the <i> talent </i>needed to
            </h2>
            <h2>
              get your business <i>growing</i>.
            </h2>
            <a className="btn btn-success" href="#">Get started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeGuide;
