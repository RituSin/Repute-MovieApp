import styles from './Header.module.css';
import React from 'react';
import SearchBar from './SearchBar';
import History from './History';
import LanguageDropdown from './LanguageDropdown';

const Header = () => {
   
    return(
        <header>
            <div className={styles.title}>
                <h1>Fil'my</h1> 
            </div>
                       
            <SearchBar/>           

            <div className={styles.navItems}>
                <History/>
                <LanguageDropdown/>           
            </div>
        </header>
    )
}

export default Header;