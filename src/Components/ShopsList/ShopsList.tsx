import React, {useState} from "react";
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

function ShopsList () {
    let shopsList = useSelector((state: shopsListType) => state.shopsReducer)
    let [imageSrc, setImageSrc] = useState('')

    return (
        <>
            <main className="shops">
                {
                    shopsList.length > 0 ? (
                        <>
                            <h2 className="shops-title">Уже в добавлены в систему</h2>
                            <div className="shops-about container">
                                {shopsList.map((shopData: storeType) => {
                                return <ShopCard shopData={shopData} />;
                                })}
                            </div>
                        </>
                        ) : (
                        <div className="not-found">
                            <div className="not-found__text">Не удалось загрузить данные. Сервер не отвечает</div>
                            <img className="not-found__image" src={notFoundImg} alt="not-found-image" />
                        </div>
                    )
                }
            </main>
        </>
    )
}

export default ShopsList;