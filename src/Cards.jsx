import React from "react";

function Card(props) {
  //console.log(props,'props')
  return (
    <div className="cards">
      <div className="card">
        <div className="zoom">
          <img src={props.imgsrc} alt="myPic" className="card_img" />
          <div className="card_info">
            <span className="card_category" style={{ color: "white" }}>
              {" "}
              {props.title}
            </span>
            <h3 className="card_title"> {props.sname} </h3>
            <a href={props.link} target="_blank">
              <button style={{ color: "white" }}> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
