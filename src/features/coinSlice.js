import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  coins: [],
  error: "",
};

export const fetchCoin = createAsyncThunk("coin/fetchCoins", () => {
  return axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then((response) => response.data);
});

const coinSlice = createSlice({
  name: "coin",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCoin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCoin.fulfilled, (state, action) => {
      state.loading = false;
      state.coins = action.payload;
      state.error = "";
    });
    builder.addCase(fetchCoin.rejected, (state, action) => {
      state.loading = false;
      state.coins = [];
      state.error = action.error.message;
    });
  },
});

export default coinSlice.reducer
