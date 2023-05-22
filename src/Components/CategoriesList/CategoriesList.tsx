import React from 'react'
import Category from '../Category/Category';
import iconSearch from '../../img/iconSearch.png'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import type { storeType } from '../../store/store';
import AutorisationButton from './AutorisationButton';

type categoriesListType = {
  shopsReducer: storeType[];
}

function Shop(props: any) {
    let currentShopId = props.shopId
    const dispatch = useDispatch()
    const categoriesList = useSelector((state: categoriesListType) => state.shopsReducer[currentShopId].categoriesList)
    console.log(categoriesList)

    return (
        <div className="shop">
            <div className='categories container'>
                <div className='categories-change'>
                <AutorisationButton />
                {/* <button className="categories-change__change-button action-button">+Еще..</button> */}
                </div>
                <div className="categories-search">
                    <img className="categories-search__icon" src={iconSearch} alt="search-icon" />
                    <input className="categories-search__field" type="text" placeholder="Поиск" />
                </div>
            </div>
            <div className='categories-main container'>
                {
                    categoriesList ? categoriesList.map((item) => {
                        // return <Category/>
                        return <div>{item.category_name}</div>
                    }) : 
                    <div className="not-uploaded">
                        <p className="not-uploaded__text"></p>
                        <img src="" alt="not uploaded image" className="not-uploaded__image" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Shop;