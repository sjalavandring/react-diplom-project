import React from 'react';
import axios from 'axios';
import './App.scss';
import Category from './Components/Category/Category';
import Shop from './Components/Shop/Shop';
import ShopsList from './Components/ShopsList/ShopsList';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import type { storeType } from './store/store';

type shopsListType = {
  shopsReducer: storeType[];
}

function App() {
  const shopsList = useSelector((state: shopsListType) => state.shopsReducer)
  // axios.get("http://localhost:3001/api/database", {params: {id: 1}})
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   })

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShopsList/>} /> 
          {
            shopsList.map((shopData) => {
              return (
                <Route path={`/${shopData.shopName}/*`} element={<Shop/>}> 
                  {/* {
                    shopData.categoriesList.map((categoryData) => {
                      return (
                        <Route path={`/${categoryData.categoryName}`} element={<Category/>}/>
                      )
                    })
                  } */}
                </Route>
              )
            })
          }
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
