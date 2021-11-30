
import './App.css';
import Header from './components/header/Header';
import Movies from './components/main/movies';
import { Fragment,  useEffect, useState } from 'react';
import fetchData from './store/data';
import { useDispatch } from 'react-redux';
import Loading from './components/main/loading';

function App() {
  
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    
    dispatch(fetchData());

    return () => clearTimeout(timer);
  },[dispatch])


  return (
    <div className="App">
      {
        isLoading ?
        <Loading/>:
        <Fragment>
          <Header/>
          <Movies/>
        </Fragment>
      }
      
    </div>
  );
}

export default App;
