
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HistoryAction } from '../../store/history-slice';
import { MovieAction } from '../../store/movie-slice';

import {FaSearch} from 'react-icons/fa';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
    
    const totalHistory = useSelector(state => state.history.totalHistory);
    const page = useSelector(state => state.movies.page);
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState("");  

    useEffect(() => {
        if(searchValue == ""){
            dispatch(MovieAction.search(""));
        }
    },[searchValue])

    useEffect(() => {
        setSearchValue("");
    },[page])

    const onSearchHandler = (e) => {
        if (e.key === 'Enter' || e.key == undefined) 
        {
            dispatch(HistoryAction.addHistory({id: totalHistory+1, value: searchValue, type:"search"}));
            dispatch(MovieAction.search(searchValue));
        }    
    }

    return(
        <div className={styles.searchBar}>
            <div className={styles.box}>
                <input type="text" placeholder="Search title..." value={searchValue} onKeyDown={(e) => onSearchHandler(e)} onChange={(e) => setSearchValue(e.target.value)}/>
                <label for="check" onClick={(e) => onSearchHandler(e)}> <FaSearch/></label>
            </div>
        </div>
    )
}

export default SearchBar;