
import React from "react";
import { useSelector } from "react-redux";
import styles from './movies.module.css';
import Pagination from "./pagination";
import Table from "./table";

const Movies = (props) => 
{
    const movies = useSelector(state => state.movies.movies);
    const page = useSelector(state => state.movies.page);

    
    return(
        <React.Fragment>
            <div className={styles["movies-conatiner"]}>            
                <Table data={movies }/>
            </div>
            <Pagination page={page}/>
        </React.Fragment>
        
    )
}

export default Movies;