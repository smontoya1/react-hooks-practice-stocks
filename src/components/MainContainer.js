import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortType, setSortType] = useState("");
  const [filterType, setFilterType] = useState("");


  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((res) => res.json())
      .then((data) => setStocks(data));
  }, []);

  function handleAddToPortfolio(stock) {
    if (!portfolio.find((s) => s.id === stock.id)) {
      setPortfolio([...portfolio, stock]);
      console.log("Clicked!")
    }
  }

  function handleRemoveFromPortfolio(stock) {
    setPortfolio(portfolio.filter((s) => s.id !== stock.id));
  }

  function handleSortChange(type) {
    setSortType(type);
  }

  function handleFilterChange(type) {
    setFilterType(type);
  }

  const filteredStocks = filterType
    ? stocks.filter((stock) => stock.type === filterType)
    : stocks;

  const sortedStocks = [...filteredStocks].sort((a, b) => {
    if (sortType === "Alphabetically") return a.name.localeCompare(b.name);
    if (sortType === "Price") return a.price - b.price;
    return 0;
  });

  return (
    <div>
      <SearchBar 
        sortType={sortType}
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer 
            stocks={sortedStocks} 
            onStockClick={handleAddToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer 
            portfolio={portfolio}
            onStockClick={handleRemoveFromPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
