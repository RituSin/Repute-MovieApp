import { createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import data1 from './data1.json';
import languages from './languages.json';
import { MovieAction } from './movie-slice';


function fetchData(page=1) {
    return dispatch => {
        const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=${page}`;
        fetch(url)
        .then(res =>{
            if(!res.ok){
                throw Error(res);
            }
            return res.json()
        })
        .then(response => {
            console.log("response",response)
            let data = response.results;

            const movies = getMovieDetails(data);
            const languages = getMovieLanguages(data);

            dispatch(MovieAction.getData({movies, page, languages}));
        })
        .catch(err => console.log("something went wrong", err));
    }
}

export default fetchData;

//fetching movies required details
export const getMovieDetails = (data) => {
    let movies = [];

    data.map(element => {
        const item = {
            id:element.id,
            original_language:element.original_language,
            original_title: element.original_title,
            overview: element.overview,
            popularity: element.popularity,
            release_date: element.release_date,
            vote_average: element.vote_average,
        }
        movies.push(item)
    });

    return movies;
}

//Extracting languages from movies 
export const getMovieLanguages = (data) => {
    let languagesData = {};
    
    data.map(element => {
        languagesData[languages[element.original_language]] = element.original_language;
    });
    
    return languagesData;   
}
