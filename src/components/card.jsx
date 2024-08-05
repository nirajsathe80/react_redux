import React from "react";

function Card({ product = {}, onButtonClick, buttonText }) {
  return (
    <div className="card" key={product?.id}>
      <img src={product?.image} alt="" />
      <h4>{product?.title}</h4>
      <h5>{product?.price}</h5>
      <button onClick={() => onButtonClick(product)} className="btn">
        {buttonText}
      </button>
    </div>
  );
}

export default Card;
