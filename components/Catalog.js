import { donuts } from "../data/donuts";
import "../styles/Catalog.css"; // adjust path as needed
import "../styles/DonutCard.css"; // your donut card styles

const Catalog = () => {
  return (
    <div className="catalog-container">
      {donuts.map((donut) => (
        <div className="donut-card" key={donut.id}>
          <img src={donut.image} alt={donut.name} className="donut-image" />
          <h3 className="donut-name">{donut.name}</h3>

          {/* Hidden content that shows on hover */}
          <p className="donut-description">{donut.description}</p>
          <p className="donut-price">₱{donut.price}</p>
          <button className="add-to-cart">Add to cart</button>
        </div>


      ))}
    </div>
  );
};

export default Catalog;
