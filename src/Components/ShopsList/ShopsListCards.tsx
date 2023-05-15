import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import iconSearch from '../../img/iconSearch.png'

import notFoundImg from '../../img/not-found.png'

import type { storeType } from '../../store/store';

import ShopCard from './ShopCard'

type shopsListType = {
    shopsReducer: storeType[];
}

function ShopsListCards () {
    let shopsList = useSelector((state: shopsListType) => state.shopsReducer)
    let [imageSrc, setImageSrc] = useState('')
    console.log(shopsList)

    // axios.get(`http://localhost:3001/img/dns_background_logo.jpg`, { responseType: 'blob' })
    // .then(response => {
    //     const objectUrl = URL.createObjectURL(new Blob(response.data));
    //     console.log(objectUrl)
    // });



    return (
        shopsList.length > 0 ? (<>
            <div className="shops-about container">
                 {shopsList.map((shopData: storeType) => {
                    return (
                        <ShopCard shopData={shopData}/>
                        // <div className="shops-about__item">
                        //     <NavLink to={`/${shopData.shop_name}`}><img className="shops-about__image" src={imageSrc} loading="lazy" alt="shops-about__image" /></NavLink>
                        //     <div className="shops-about__description">{shopData.shop_name}</div>
                        // </div>
                    )
                })}
            </div>
        </>)  : 
        <div className="not-found">
            <div className="not-found__text">Не удалось загрузить данные. Сервер не отвечает</div>
            <img className="not-found__image" src={notFoundImg} alt="not-found-image" />
        </div>
    )
}

export default ShopsListCards;