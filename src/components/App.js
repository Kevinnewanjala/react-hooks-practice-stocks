import React, { useState } from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";

function App() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [filterBy, setFilterBy] = useState("All");

  return (
    <div>
      <Header />
      <MainContainer
        stocks={stocks}
        setStocks={setStocks}
        portfolio={portfolio}
        setPortfolio={setPortfolio}
        sortBy={sortBy}
        setSortBy={setSortBy}
        filterBy={filterBy}
        setFilterBy={setFilterBy}
      />
    </div>
  );
}

export default App;