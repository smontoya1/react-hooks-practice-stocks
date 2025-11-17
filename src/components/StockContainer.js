import React, { useState, useEffect } from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onStockClick }) {

  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock => (
        <Stock 
          key={stock.id}
          stock={stock} 
          onStockClick={onStockClick(stock)}/>
      )))}
    </div>
  );
}

export default StockContainer;
