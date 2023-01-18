import React from "react";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};

const HomeSlideProject = (props: Props) => {
  const slickSettings: Settings = {
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="home--slideProject">
      <div className="home--slideProject__content">
        <h6 className="home--component__text">
          Get inspired with projects made by our freelancers
        </h6>
        <Slick {...slickSettings}>
          <div className="home--slideProject__item">
            <div className="home--slideProject__item--content">
              <a className="home--slideProject__item--top" href="#">
                <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615082/christophbrandl.png" />
              </a>
              <div className="home--slideProject__item--bot">
                <div className="home--slideProject__item--bot__image">
                  <img
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/b615b780b5c813d932953d05ec10f811-1596879215580/6b4a9867-ad06-415f-b307-11177ae30fdd.jpeg"
                    loading="lazy"
                  />
                </div>
                <a className="home--slideProject__item--bot__author" href="#">
                  lllustration<span>by christophbrandl</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home--slideProject__item">
            <div className="home--slideProject__item--content">
              <a className="home--slideProject__item--top" href="#">
                <img
                  alt="Realistic Portrait"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615069/noneyn.png"
                />
              </a>
              <div className="home--slideProject__item--bot">
                <div className="home--slideProject__item--bot__image">
                  <img
                    alt="Seller profile image"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/23b01eca3b78e2869e149efe15d3066a-1613424545655/0aaffa8e-01e0-4dcb-b56d-674e9b9c4bf5.jpg"
                  />
                </div>
                <a className="home--slideProject__item--bot__author" href="#">
                  Portralts & Carlcatures<span>by noneyn</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home--slideProject__item">
            <div className="home--slideProject__item--content">
              <a className="home--slideProject__item--top" href="#">
                <img
                  alt="GIF Animation"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/d51cf66f8a7026eb56a8c8e6b6793b24-1617027896306/lamonastudio-img.png"
                />
              </a>
              <div className="home--slideProject__item--bot">
                <div className="home--slideProject__item--bot__image">
                  <img
                    alt="Seller profile image"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/706891a4cc08826adca2819e14129aaf-1583755607494/5a706f4e-9f73-4ebc-97ff-9d2ef16bf28c.jpg"
                  />
                </div>
                <a className="home--slideProject__item--bot__author" href="#">
                  Animated GIFs<span>by lamonastudio</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home--slideProject__item">
            <div className="home--slideProject__item--content">
              <a className="home--slideProject__item--top" href="#">
                <img
                  alt="Book Cover"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/annapietrangeli.jpeg"
                />
              </a>
              <div className="home--slideProject__item--bot">
                <div className="home--slideProject__item--bot__image">
                  <img
                    alt="Seller profile image"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/8b60be1bf2915ddc1d551eaa252684d7-1589020928117/1d531e54-7607-4bdb-815f-088dbc0fb971.jpg"
                  />
                </div>
                <a className="home--slideProject__item--bot__author" href="#">
                  Book Design<span>by annapietrangeli</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home--slideProject__item">
            <div className="home--slideProject__item--content">
              <a className="home--slideProject__item--top" href="#">
                <img
                  alt="Landing Page Design"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615106/skydesigner.png"
                />
              </a>
              <div className="home--slideProject__item--bot">
                <div className="home--slideProject__item--bot__image">
                  <img
                    alt="Seller profile image"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/79cf5c7a560e6668555338b2831480e1-1539770224917/2bb8af3c-4cce-42a8-a699-f11177524084.png"
                  />
                </div>
                <a className="home--slideProject__item--bot__author" href="#">
                  Web & Mobile Design<span>by skydesigner</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home--slideProject__item">
            <div className="home--slideProject__item--content">
              <a className="home--slideProject__item--top" href="#">
                <img
                  alt="Catalog Design"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/aa2ff6a65708e858cd563bedbc1f9e48-1617004762616/spickex.jpeg"
                />
              </a>
              <div className="home--slideProject__item--bot">
                <div className="home--slideProject__item--bot__image">
                  <img
                    alt="Seller profile image"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/profile/photos/22711136/original/fiverr_profile.jpg"
                  />
                </div>
                <a className="home--slideProject__item--bot__author" href="#">
                  Flyer Design<span>by spickex</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home--slideProject__item">
            <div className="home--slideProject__item--content">
              <a className="home--slideProject__item--top" href="#">
                <img
                  alt="Social Media Design"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615084/fernandobengua.png"
                />
              </a>
              <div className="home--slideProject__item--bot">
                <div className="home--slideProject__item--bot__image">
                  <img
                    alt="Seller profile image"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/0738007a913d22569fe2b049f9259526-1589210299120/db111eb4-c119-42b4-9a1d-9116601f3d22.png"
                  />
                </div>
                <a className="home--slideProject__item--bot__author" href="#">
                  Social Media Design<span>by fernandobengua</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home--slideProject__item">
            <div className="home--slideProject__item--content">
              <a className="home--slideProject__item--top" href="#">
                <img
                  alt="Logo Design"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615063/bruno_malagrino.png"
                />
              </a>
              <div className="home--slideProject__item--bot">
                <div className="home--slideProject__item--bot__image">
                  <img
                    alt="Seller profile image"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/c15f6b22da97be41a8878e753a1a16c2-863645391592368980.489561/AF1BF970-07CA-454B-8AF1-2F3E06838C8B"
                  />
                </div>
                <a className="home--slideProject__item--bot__author" href="#">
                  Logo Design<span>by bruno_malagrino</span>
                </a>
              </div>
            </div>
          </div>
          <div className="home--slideProject__item">
            <div className="home--slideProject__item--content">
              <a className="home--slideProject__item--top" href="#">
                <img
                  alt="Brand Style Guides"
                  src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_320,dpr_1.0/v1/attachments/generic_asset/asset/f23a46693ef0e611430e232cbc989e2b-1617004615077/eveeelin.jpeg"
                />
              </a>
              <div className="home--slideProject__item--bot">
                <div className="home--slideProject__item--bot__image">
                  <img
                    alt="Seller profile image"
                    src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/27bdb82e27e444fe2b27aa7b3083cee8-1591694084918/f79ede47-da5f-440a-bf23-57ed9ef7d363.png"
                  />
                </div>
                <a className="home--slideProject__item--bot__author" href="#">
                  Logo Design<span>by eveeelin</span>
                </a>
              </div>
            </div>
          </div>
        </Slick>
        <div className="home--slideProject__seeMore">
          <a href="#"> See More Projects {">"}</a>
        </div>
      </div>
    </div>
  );
};

export default HomeSlideProject;
