import React from "react";

function Stock({ stock, stocks, setStocks, portfolio, setPortfolio, inPortfolio }) {
  const handleClick = () => {
    if (inPortfolio) {
      // Sell stock
      const updatedPortfolio = portfolio.filter((item) => item.id !== stock.id);
      setPortfolio(updatedPortfolio);
    } else {
      // Buy stock
      const updatedStocks = stocks.filter((item) => item.id !== stock.id);
      setStocks(updatedStocks);
      setPortfolio([...portfolio, stock]);
    }
  };

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Stock;
