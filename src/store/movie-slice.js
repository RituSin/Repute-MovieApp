

import { createSlice  } from "@reduxjs/toolkit";

let initialState = {movies: [], page: 1, languages: {}, currentfilter:"", currentSearch:""};

const MovieSlice = createSlice(
    {
        name: "movies",
        initialState,
        reducers: {
            getData(state, action)
            {
                const {movies, page, languages}= action.payload;
                initialState = {...initialState, movies, page, languages}
                
                return {...state, movies, page, languages};                
            },
            search(state, action)
            {
                let movies = [...initialState.movies];
                if(action.payload != "" || state.currentfilter != ""){
                    movies = movies.filter(item => item.original_title.toLowerCase().indexOf((action.payload).toLowerCase()) > -1 && 
                    (item.original_language == state.currentfilter || state.currentfilter == "") );
                }
                               
                return {...state, movies, currentSearch: action.payload}
            },
            filter(state, action)
            {
                let movies = [...initialState.movies];
                if(action.payload != "" || state.currentSearch != ""){
                    movies = movies.filter(item => item.original_title.toLowerCase().indexOf((state.currentSearch).toLowerCase()) > -1 && 
                    (item.original_language == action.payload || action.payload == ""));    
                }
                               
                return {...state, movies, currentfilter: action.payload}
            }
        }
    }
);

export const MovieAction = MovieSlice.actions;

export default MovieSlice;