import { donuts } from "../data/donuts";
import { useState } from "react";
import "../styles/Catalog.css";
import "../styles/DonutCard.css";

function Catalog({ searchQuery, addToCart }) {
  const [addedIds, setAddedIds] = useState([]); // track which donuts were just added

  const handleAdd = (donut) => {
    addToCart(donut);
    setAddedIds((prev) => [...prev, donut.id]);

    // revert button text after 2 seconds
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== donut.id));
    }, 2000);
  };

  const filteredDonuts = donuts.filter((donut) =>
    donut.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="catalog-container">
      {filteredDonuts.length > 0 ? (
        <div className="cards">
          {filteredDonuts.map((donut) => (
            <div key={donut.id} className="donut-card">
              <img src={donut.image} alt={donut.name} className="donut-image" />
              <h3 className="donut-name">{donut.name}</h3>
              <p className="donut-description">{donut.description}</p>
              <p className="donut-price">₱{donut.price}</p>
              <button
                className="add-to-cart"
                onClick={() => handleAdd(donut)}
              >
                {addedIds.includes(donut.id) ? "Added ✓" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No donuts found for "{searchQuery}"</p>
      )}
    </div>
  );
}

export default Catalog;
