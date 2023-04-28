import React, { useState } from "react";
import testImage from '../../img/shop-logo.png'
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import iconSearch from '../../img/iconSearch.png'

import type { storeType } from '../../store/store';

type shopsListType = {
    shopsReducer: storeType[];
}

function ShopsListCards () {
    let shopsList = useSelector((state: shopsListType) => state.shopsReducer)
    console.log(shopsList)

    return (
        <>
            <div className="shops-about container">
                {shopsList.map((shopData) => {
                    return (
                        <div className="shops-about__item">
                            <NavLink to={`/${shopData.shop_name}` }><img className="shops-about__image" src={testImage} alt="shops-about__image" /></NavLink>
                            <div className="shops-about__description">{shopData.shop_name}</div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ShopsListCards;