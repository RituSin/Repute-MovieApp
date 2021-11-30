import { configureStore } from "@reduxjs/toolkit";
import HistorySlice from "./history-slice";
import MovieSlice from "./movie-slice";


const store = configureStore(
    {
        reducer: {movies: MovieSlice.reducer, history: HistorySlice.reducer}
    }
)

export default store;