import { useEffect, useState } from "react";
import "../src/index.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoin } from "./features/coinSlice";
import SingleCoin from "../component/SingleCoin";

function App() {
  const [search, setSearch] = useState('');
  const data = useSelector((state) => state.coin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoin());
  }, []);

  const filteredCoins = data.coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="top-search">
        <form role="search">
          <label htmlFor="search">Search for stuff</label>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autoFocus
            required
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
      <div className="main-container">
        {data.loading && <div>Loading...</div>}
        {!data.loading && data.error ? <div>Error: {data.error}</div> : null}
        {filteredCoins &&
          filteredCoins.map((coin) => <SingleCoin key={coin.id} coin={coin} />)}
      </div>
    </>
  );
}

export default App;
