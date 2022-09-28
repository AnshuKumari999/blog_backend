//import React, { useContext } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Card from "../component/Card";
import CardHome from "../component/CardHome";
import SmallCard from "../component/SmallCard";
// import { store } from "./Details";

const Home = () => {
  // const [detail, setDetail] = useContext(store);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("http://localhost:8080/");
      setDetail(data.data);
    };
    getData();
  }, []);

  return (
    <div>
      <div className="Home">
        <div className="home_container">
          <div className="home_first_img"></div>
          <div className="home_sec_img">
            <Link to="/fitness">
              <img
                src="https://slman.com/sites/slman/files/styles/max_400x400/public/articles/2021/05/back-gym-hero1.jpg?itok=Ril_s6Hr"
                alt="not foun"
              />
            </Link>
          </div>
        </div>
        <div className="home_third_img">
          <Link to="/technology">
            <img
              src="https://www.london.ac.uk/sites/default/files/styles/promo_mobile/public/2020-04/sb-simone-image.jpg?itok=nAkc3CGk"
              alt="not found"
            />
          </Link>
        </div>
        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className="home_left left1">
          {detail
            .filter((article) => {
              return article.category === "bollywood";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="home_left left1">
          {detail
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="home_left left1">
          {detail
            .filter((article) => {
              return article.category === "food";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>

        <h1 className="Top">Top Posts</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />

        <div className="rightbar2">
          {detail
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Card
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className="sidebar2">
          {detail
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <SmallCard
                articleid={n.id}
                imgUrl={n.Image}
                description={n.description.slice(0, 200)}
                title={n.title.slice(0, 25)}
                author={n.author}
              />
            ))}

          <div className="advertisement">
            <p>Advertisement</p>
          </div>
        </div>
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h1>
        <hr />

        <div className="home_left">
          {detail
            .filter((article) => {
              return article.category === "footer1";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

        <div className="home_left">
          {detail
            .filter((article) => {
              return article.category === "footer2";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>

        <div className="home_left">
          {detail
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                articleid={n.id}
                imgUrl={n.Image}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
