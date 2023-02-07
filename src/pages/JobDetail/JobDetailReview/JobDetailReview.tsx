import React from "react";


type Props = {};

const JobDetailReview = (props: Props) => {
  
  return (
    <div className="jobdetail--review">
      <h6>Reviews</h6>
      <div className="detail">
        <div className="detail--left">
          <span>485 review for this Gig</span>
          <span>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <span>5</span>
          </span>
        </div>
        <div className="detail--right">
          <span>Soft By</span>
          <span>Most relevant</span>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
      <div className="star">
        <div className="star--left">
          <table>
            <tr className="five--star">
              <td className="have-stars">5 Stars</td>
              <td>
                <div className="star--rate">
                  <span></span>
                </div>
              </td>
              <td className="have-stars">(478)</td>
            </tr>
            <tr className="four--star">
              <td className="have-stars">4 Stars</td>
              <td>
                <div className="star--rate">
                  <span></span>
                </div>
              </td>

              <td className="have-stars">(6)</td>
            </tr>
            <tr className="three--star">
              <td className="have-stars">3 Stars</td>
              <td>
                <div className="star--rate">
                  <span></span>
                </div>
              </td>

              <td className="have-stars">(1)</td>
            </tr>
            <tr className="two--star">
              <td className="no-star">2 Stars</td>

              <td>
                <div className="star--rate">
                  <span></span>
                </div>
              </td>
              <td className="no-star">(0)</td>
            </tr>
            <tr className="one--star">
              <td className="no-star">1 Star</td>

              <td>
                <div className="star--rate">
                  <span></span>
                </div>
              </td>
              <td className="no-star">(0)</td>
            </tr>
          </table>
        </div>
        <div className="star--right">
          <h5>Rating Breakdown</h5>
          <ul>
            <li>
              <div>
                <p>Seller commmunication level</p>
                <div>
                  <span>
                    <i className="fa-solid fa-star"></i>5
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <p>Recommend to a friend</p>
                <div>
                  <span>
                    <i className="fa-solid fa-star"></i>5
                  </span>
                </div>
              </div>
            </li>
            <li>
              <div>
                <p>Service as described</p>
                <div>
                  <span>
                    <i className="fa-solid fa-star"></i>5
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobDetailReview;
