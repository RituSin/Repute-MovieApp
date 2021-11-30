

import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HistoryAction } from '../../store/history-slice';

import {FaHistory} from 'react-icons/fa';
import {TiDelete} from 'react-icons/ti'; 
import styles from './History.module.css';

const History = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.history.history);
    const [hideHistoryDropdown, setHideHistoryDropdown] = useState(true);


    return(
        <div 
            className={styles.historyDropdown} tabIndex={0}  
            onClick={() => setHideHistoryDropdown((prevState) => !prevState)} 
            onBlur={() =>  setHideHistoryDropdown(true)}>

            <label for="" className={styles.btn} >
            History<span><FaHistory className={styles.i}/></span>
            </label>

            <ul className={styles.menu} 
                id="langMenu" 
                style={hideHistoryDropdown ? {display:'none'}: {display:'block'}}>
                {
                    history.map((item,index) => (
                        <li key={`${item.id}_${item.value}_${index}`} >
                            {item.value}
                            <span onClick={() => dispatch(HistoryAction.removeHistory(item.id))}><TiDelete/></span>
                        </li>
                    ))
                }
                <li key={`clearHistory`} onClick={() => dispatch(HistoryAction.removeHistory())}>Clear History</li>
            </ul>
        </div>
    )
}

export default History;