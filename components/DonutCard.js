import React from "react";
import "../styles/DonutCard.css";

const DonutCard = ({ image, name, description, price }) => {
  return (
    <div className="donut-card" tabIndex="0" aria-label={`${name} donut`}>
      <img src={image} alt={name} className="donut-image" />
      <h3 className="donut-name">{name}</h3>

      {/* reveal moved into its own container (absolute, out-of-flow) */}
      <div className="donut-reveal">
        <p className="donut-description">{description}</p>
        <p className="donut-price">₱{price}</p>
        <button className="add-to-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default DonutCard;
