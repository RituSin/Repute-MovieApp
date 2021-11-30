

import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";

let initialState = {history:[], totalHistory:0};

const HistorySlice = createSlice(
    {
        name: "history",
        initialState,
        reducers: {
            addHistory(state, action){
                let length = state.totalHistory;
                if(length >= 3){
                    return state;
                }

                return {...state, history: [...state.history, action.payload], totalHistory:  length+1}
            },
            removeHistory(state,action){
                let length = state.totalHistory;
                if(length < 1){
                    return state;
                }

                let history = [];
                let totalHistory = 0;
                if(action.payload){
                    history = state.history.filter(item => item.id != action.payload);
                    totalHistory = length - 1;
                }
                
                return {...state, history, totalHistory};
            }
        }
    }
);

export const HistoryAction = HistorySlice.actions;

export default HistorySlice;