
import { useDispatch, useSelector } from 'react-redux';
import { HistoryAction } from '../../store/history-slice';
import { MovieAction } from '../../store/movie-slice';

import {FaCaretDown,FaCaretUp} from 'react-icons/fa';
import styles from './LanguageDropdown.module.css';
import { useEffect, useState } from 'react';

const LanguageDropdown = () => {
    const dispatch = useDispatch();
    const languages = useSelector(state => state.movies.languages);
    const totalHistory = useSelector(state => state.history.totalHistory);
    const page = useSelector(state => state.movies.page);
    
    const [filterValue, setFilterValue] = useState("");    
    const [hideLanguageDropdown, setHideLanguageDropdown] = useState(true);    

    useEffect(() => {
        setFilterValue("");
    },[page])

    const onLanguageChangeHandler =(name,code) => {
        setFilterValue(name);
        if(name != "" && code != ""){
            dispatch(HistoryAction.addHistory({id: totalHistory+1, value: name, type: "filter"}));
        }
        
        dispatch(MovieAction.filter(code))
    }

    return(
        <div className={styles.LangDropdown} tabIndex={0} 
             onClick={() => setHideLanguageDropdown((prevState) => !prevState)}  
             onBlur={() =>setHideLanguageDropdown(true)}>

                <label for="" className={styles.btn} >
                    {filterValue == "" ? "Language" : filterValue}
                    <span>{hideLanguageDropdown ? <FaCaretDown/> : <FaCaretUp/>}</span>
                </label>

                <ul className={styles.menu} 
                    id="langMenu" 
                    style={hideLanguageDropdown ? {display:'none'}: {display:'block'}}>
                    {
                        languages && Object.entries(languages)
                        .map(([key,value], index) => (
                            <li 
                            key={`${index}_${key}_${value}`}            
                            onClick={() => onLanguageChangeHandler(key, value)}>
                                {key}
                            </li>
                        ))
                            
                    }
                    <li  key={`${-1}_none`}  onClick={() => onLanguageChangeHandler("", "")}>None</li>                   
                </ul>
        </div>
    )
}

export default LanguageDropdown;