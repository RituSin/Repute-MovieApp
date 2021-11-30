
import React from "react";
import { useDispatch } from "react-redux";
import fetchData from "../../store/data";
import { MovieAction } from "../../store/movie-slice";
import styles from './pagination.module.css';

const Pagination = (props) => 
{
    const dispatch = useDispatch();

    const onPageChangeHandler = (page) => {
        if(page > 3 || page < 1){
            return;
        }

        dispatch(fetchData(page));
    }

   
    return(
        <div className={styles.pagination}>            
            <span  
            onClick={() => onPageChangeHandler(props.page - 1)} 
            style={props.page == 1 ? {backgroundColor:'gray'} : {backgroundColor: '#ba382f'}}>
                &#9666;
            </span>
            <span>{props.page} </span>
            <span 
            onClick={() => onPageChangeHandler(props.page + 1)}
            style={props.page == 3 ? {backgroundColor:'gray'} : {backgroundColor: '#ba382f'}}>&#9656;</span>
        </div>
    )
}

export default Pagination;