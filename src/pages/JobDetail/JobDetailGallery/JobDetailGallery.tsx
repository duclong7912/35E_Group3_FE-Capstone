import React from "react";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
type Props = {};

const JobDetailGallery = (props: Props) => {
  const setting = {};
  return (
    <div className="jobdetail--gallery">
      <Slick {...setting}>
          <div className="gallery--item">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/133693784/original/c5e0da9f537feabb0c773a09d96bbea796f69d1a/design-ecommerce-wix-website.jpg" alt="..." />
          </div>
          <div className="gallery--item">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/133693784/original/c5e0da9f537feabb0c773a09d96bbea796f69d1a/design-ecommerce-wix-website.jpg" alt="..." />
          </div>
          <div className="gallery--item">
            <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/133693784/original/c5e0da9f537feabb0c773a09d96bbea796f69d1a/design-ecommerce-wix-website.jpg" alt="..." />
          </div>
      </Slick>
    </div>
  );
};

export default JobDetailGallery;
