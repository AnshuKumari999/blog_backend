import React from "react";
import { useLocation } from "react-router-dom";
import "./singlePage.css";

const SingleBlogPage = () => {
  const location = useLocation();
  const title = location.state;
  const img = location.state;
  const description = location.state;
  console.log(title);
  return (
    <div className="single_page">
      <h1>{title}</h1>
      <img src={img} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default SingleBlogPage;
