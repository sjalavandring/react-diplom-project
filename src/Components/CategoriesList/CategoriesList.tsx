import React from 'react'
import Category from '../Category/Category';
import iconSearch from '../../img/iconSearch.png'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import type { storeType } from '../../store/store';

type categoriesListType = {
  shopsReducer: storeType[];
}

function Shop() {
    const dispatch = useDispatch()
    const categoriesList = useSelector((state: categoriesListType) => state.shopsReducer)
    console.log(categoriesList)

    return (
        <div className="shop">
            <div className='categories container'>
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
                        // return <Category/>
                        return <div>Hello</div>
                    })
                }
            </div>
        </div>
    )
}

export default Shop;