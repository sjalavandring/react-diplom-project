import React from 'react';
import axios from 'axios';
import './App.scss';
import Category from './Components/Category/Category';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import type { storeType } from './store/store';

import iconSearch from '../src/img/iconSearch.png'

type categoriesListType = {
  productionReducer: storeType[];
}

function App() {
  const categoriesList = useSelector((state: categoriesListType) => state.productionReducer)
  // console.log(categoriesList)

  axios.get("http://localhost:3001/api/database", {params: {id: 1}})
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })

  return (
    <main>
      <div className='categories-header container'>
        <div className='categories-change'>
          <button className="categories-change__change-button authentication-button">Войти</button>
          {/* <button className="categories-change__change-button action-button">+Еще..</button> */}
        </div>
        <div className="categories-search">
          <img className="categories-search__icon" src={iconSearch} alt="search-icon" />
          <input className="categories-search__field" type="text" placeholder="Поиск" />
        </div>
      </div>
      <div className='categories-main container'>
        {
          categoriesList.map(() => {
            return <Category/>
          })
        }
      </div>
    </main>
  );
}

export default App;
