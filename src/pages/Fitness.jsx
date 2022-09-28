//import React, { useContext } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios";

// import { store } from "./Details";
import Card from "../component/Card";
import SmallCard from "../component/SmallCard";

const Fitness = () => {
  // const [detail, setDetail] = useContext(store);
  // console.log(detail);

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
      <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Fitness</h1>
      <h1 style={{ margin: "20px 0px 20px 37%", display: "inline-block" }}>
        Top Posts
      </h1>
      <div className="main_container">
        <div className="rightbar">
          {detail
            .filter((article) => {
              return article.category === "Fitness";
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

        <div className="sidebar">
          {detail
            .filter((article) => {
              return article.category === "Fitness";
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
      </div>
    </div>
  );
};
export default Fitness;
