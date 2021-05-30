import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";
import Particles from "react-particles-js";
import particlesConfig from "./particlesConfig";

let ncard = (val) => {
  console.log(val);
  return (
    <Card
      key={val.id}
      imgsrc={val.imgsrc}
      title={val.title}
      sname={val.name}
      link={val.link}
    />
  );
};

ReactDOM.render(
  <>
    <div className="App" style={{ position: "relative", overflow: "hidden" }}>
      <div style={{ position: "relative" }}>
        <Particles
          height="100%"
          width="100%"
          params={particlesConfig}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        />
        <h1 className="heading-style">List of top 5 Netflix in 2021</h1>
        {Sdata.map(ncard)};
      </div>
    </div>
    ;
  </>,
  document.getElementById("root")
);
