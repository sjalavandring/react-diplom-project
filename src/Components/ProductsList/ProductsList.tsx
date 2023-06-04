import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { storeType } from '../../store/store';
import iconSearch from '../../img/iconSearch.png'
import notFoundImg from '../../img/not-found.png'
import ProductCard from './ProductCard';

type shopsListType = {
    shopsReducer: storeType[];
}
function ProductsList(props: {shopId: number, categoryId: number}) {
    const dispatch = useDispatch();
    const productsList = useSelector((state: shopsListType) => state.shopsReducer[props.shopId].categoriesList[props.categoryId].productsList)

    // useEffect(() => {
    //     dispatch({type: "changeShadowBackgroundStatus"})
    // }, [])

    return (
        productsList ? 
        <div className="products-list">
            <div className='products container'>
                <div className='categories-title'>
                    <h2 className='categories-title__text'>Перечень товаров категории</h2>
                </div>
                <div className="categories-search">
                    <img className="categories-search__icon" src={iconSearch} alt="search-icon" />
                    <input className="categories-search__field" type="text" placeholder="Поиск" />
                </div>
            </div>
            <div className='categories-main container'>
                {
                    productsList.map((item, index) => {
                        return <ProductCard productData={productsList[index]}/>
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

export default ProductsList;