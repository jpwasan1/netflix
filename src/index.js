import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import Sdata from "./Sdata";

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
    <h1 className="heading-style">JAISI PG 2-A-1 JAWAHAR NAGAR, SRI GANGANAGAR, RAJASTHAN</h1>
    {Sdata.map(ncard)};
  </>,
  document.getElementById("root")
);
