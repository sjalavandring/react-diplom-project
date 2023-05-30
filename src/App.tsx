import { useEffect } from 'react';
import axios from 'axios';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux/es/exports';

import './App.scss';
import CategoriesList from './Components/CategoriesList/CategoriesList';
import ShopsList from './Components/ShopsList/ShopsList';
import ProductsList from './Components/ProductsList/ProductsList';
import AutorisationModalWindow from './Components/ModalWindows/AutorisationModalWindow';

import type { storeType } from './store/store';
import type { themeStateType } from './store/themeReducer';
import { visuallyImpairedType } from './store/visuallyImpairedReducer';

import darkThemeImg from './img/theme-dark.png'
import lightThemeImg from './img/theme-light.png'

import darkVisuallyImpairedImg from './img/visually-impaired-logo-dark.png'
import lightVisuallyImpairedImg from './img/visually-impaired-logo-light.png'

import twitterImg from './img/twitter.png'
import youtubeImg from './img/youtube.png'
import telegramImg from './img/telegram.png'
import notFoundImg from './img/not-found.png'

import NewShopModalWindow from './Components/ModalWindows/NewShopModalWindow';
import NewCategoryModalWindow from './Components/ModalWindows/NewShopModalWindow';
import NewProductModalWindow from './Components/ModalWindows/NewShopModalWindow';
import ShadowBackground from './Components/ModalWindows/ShadowBackground'
import AutorisationButton from './Components/Buttons/AutorisationButton';
import NewShopButton from './Components/Buttons/NewShopButton';
import NewCategoryButton from './Components/Buttons/NewCategoryButton';
import NewProductButton from './Components/Buttons/NewProductButton';

type shopsListType = {
  shopsReducer: storeType[];
}

type themeStatusType = {
  themeReducer: themeStateType,
}

type visuallyImpairedStatusType = {
  visuallyModeReducer: visuallyImpairedType,
}

function App() {
  const dispatch = useDispatch();

  const shopsList = useSelector((state: shopsListType) => state.shopsReducer)
  const themeStatus = useSelector((state: themeStatusType) => state.themeReducer.isThemeDark)
  const visuallyImpairedStatus = useSelector((state: visuallyImpairedStatusType) => state.visuallyModeReducer.isModeActive)

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", themeStatus ? 'dark' : 'light')
  }, [themeStatus])

  function changeTheme () {
    dispatch({type: "themeChanger"})
  }

  useEffect(() => {
    axios.get("http://localhost:3001/api/database")
    .then(function (response) {
      // console.log(response);
      dispatch({type: "setNewState", newShopsList: response.data})
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [])

  return (
    <BrowserRouter>
      <header className="header">
        <div className="header-content container">
          <div className="logo">
            <div className="logo__part1">Online</div>
            <div className="logo__part2">Catalogs</div>
          </div>
          <div className="header-actions">
            <Routes>
              <Route path='/' element={<NewShopButton/>} /> 
              {
                shopsList.map((shopData, shopId) => {
                  return (
                    <>
                      <Route path={`/${shopData.shop_name}/`} element={<NewCategoryButton/>}/> 
                        {
                          shopData.categoriesList ? shopData.categoriesList.map((categoryData, categoryId) => {
                            return (
                              <Route path={`/${shopData.shop_name}/${categoryData.category_name}/*`} element={<NewProductButton/>}/>
                            )
                          }) : null
                        }
                    </>
                  )
                })
              }
            </Routes>
            <div className="visually-impaired-toggler">
              <img className="visually-impaired-toggler__image" src={(themeStatus ? darkVisuallyImpairedImg : lightVisuallyImpairedImg)} alt="Режим для слабовидящих" />
            </div>
            <div className={"theme-toggler theme-toggler_theme" + (themeStatus ? "_dark" : "_light")} onClick={changeTheme}>
              <div className="theme-toggler__container">
                <div className={"theme-toggler__switcher theme-toggler__switcher_theme" + (themeStatus ? "_dark" : "_light")}>
                  <img className="theme-toggler__image" src={themeStatus ? darkThemeImg : lightThemeImg} alt="theme-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <Routes>
          <Route path='*' element={                        
            <div className="not-found">
                <div className="not-found__text">Не удалось загрузить данные. Сервер не отвечает</div>
                <img className="not-found__image" src={notFoundImg} alt="not-found-image" />
            </div>
          }/>
          <Route path='/' element={<ShopsList/>} /> 
          {
            shopsList.map((shopData, shopId) => {
              return (
                <>
                <Route path={`/${shopData.shop_name}/`} element={<CategoriesList shopId={shopId}/>}/> 
                  {
                    shopData.categoriesList ? shopData.categoriesList.map((categoryData, categoryId) => {
                      return (
                        <Route path={`/${shopData.shop_name}/${categoryData.category_name}/`} element={<ProductsList shopId={shopId} categoryId={categoryId}/>}>
                          {
                            categoryData.productsList ? categoryData.productsList.map((productData, productId) => {
                              return (
                                <Route path={`/${shopData.shop_name}/${categoryData.category_name}/${productData.product_name}/`} element={<div>1</div>}/>
                              )
                            }) : null
                          }
                        </Route>
                      )
                    }) : null
                  }
                </>
              )
            })
          }
        </Routes>
        <AutorisationModalWindow/>
        <NewShopModalWindow/>
        <NewCategoryModalWindow/>
        <NewProductModalWindow/>
        <ShadowBackground/>
      </main>
      <footer className='footer'>
        <div className="footer-content container">
          <div className="footer-copiright">
            Trunov Dmitry ©
          </div>
          <ul className="footer-contacts">
            <li className="footer-contacts__item">
              <img className="footer-contacts__image" src={youtubeImg}  alt="youtube"/>
              Youtube
            </li>
            <li className="footer-contacts__item">
              <img className="footer-contacts__image" src={telegramImg}  alt="telegram"/>
              Telegram
            </li>
            <li className="footer-contacts__item">
              <img className="footer-contacts__image" src={twitterImg} alt="twitter" />
              Twitter
            </li>
          </ul>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
