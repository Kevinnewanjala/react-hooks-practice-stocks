import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio, setPortfolio }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          portfolio={portfolio}
          setPortfolio={setPortfolio}
          inPortfolio={true}
        />
      ))}
    </div>
  );
}

export default PortfolioContainer;