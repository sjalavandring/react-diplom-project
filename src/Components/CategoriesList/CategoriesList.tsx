import React from 'react'
import { useLocation } from 'react-router-dom'
import Category from '../ProductsList/ProductsList';
import iconSearch from '../../img/iconSearch.png'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import type { storeType } from '../../store/store';
import AutorisationButton from '../Buttons/AutorisationButton';

import notFoundImg from '../../img/not-found.png'

type categoriesListType = {
  shopsReducer: storeType[];
}

function Shop(props: any) {
    let currentShopId = props.shopId
    const dispatch = useDispatch()
    const categoriesList = useSelector((state: categoriesListType) => state.shopsReducer[currentShopId].categoriesList)
    console.log(categoriesList)

    let location = useLocation()
    console.log(location.pathname)

    return (
        categoriesList ? 
        <div className="shop">
            <div className='categories container'>
                <div className='categories-title'>
                    <h2 className='categories-title__text'>Доступные категории</h2>
                </div>
                <div className="categories-search">
                    <img className="categories-search__icon" src={iconSearch} alt="search-icon" />
                    <input className="categories-search__field" type="text" placeholder="Поиск" />
                </div>
            </div>
            <div className='categories-main container'>
                {
                    categoriesList.map((item) => {
                        // return <Category/>
                        return <div>{item.category_name}</div>
                    })  
                }
            </div>
        </div> :
        <div className="not-found">
            <div className="not-found__text">Не удалось загрузить данные. Сервер не отвечает</div>
            <img className="not-found__image" src={notFoundImg} alt="not-found-image" />
        </div>
    )
}

export default Shop;