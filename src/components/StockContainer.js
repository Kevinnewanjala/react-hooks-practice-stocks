import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, setStocks, portfolio, setPortfolio }) {
  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          stocks={stocks}
          setStocks={setStocks}
          portfolio={portfolio}
          setPortfolio={setPortfolio}
        />
      ))}
    </div>
  );
}

export default StockContainer;
