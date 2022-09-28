import React from "react";
import { Link } from "react-router-dom";

const SmallCard = (props) => {
  const { imgUrl, title, description, articleid } = props;
  return (
    <Link
      state={{
        title: title,
        img: imgUrl,
        description: description,
        id: articleid
      }}
      to={`${articleid}`}
    >
      <div className="card_small">
        <div className="card_data">
          <div className="smallCard_image">
            <img src={imgUrl} alt="Image not found" />
          </div>
          <div className="small">
            <h6>{title} .....</h6>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SmallCard;
