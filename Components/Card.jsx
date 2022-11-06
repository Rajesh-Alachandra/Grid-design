import React from "react";

const Card = (props) => {
  return (
    <>
      {props.details.map((value, index) => (
        <div className="Card" key={index}>
          <div className="Card-image">
            <img src={value.img} />
            <div className="text">
              <p className="Card-title">{value.title}</p>
              <p className="Card-description">{value.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Card;
