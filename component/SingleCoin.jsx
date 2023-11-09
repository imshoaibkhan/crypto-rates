import React from "react";
import '../src/index.css'
const SingleCoin = ({ coin }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={coin.image} alt="crypto" />
          <h1>{coin.name}</h1>
          <p className="coin-symbol">{coin.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs.{coin.current_price}</p>
          {/* // <p className="coin-volume">Rs.{coin.volume.toLocaleString()}</p> */}
          {coin.price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">{coin.price_change_percentage_24h.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{coin.price_change_percentage_24h.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Market Cap: Rs.{coin.market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleCoin;