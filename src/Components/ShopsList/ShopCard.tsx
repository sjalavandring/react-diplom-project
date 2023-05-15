import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { storeType } from "../../store/store";
import axios from "axios";
import defaultImage from '../../img/shop-logo.png'

function ShopCard (props: {shopData: storeType}) {
    const [imageSrc, setImageSrc] = useState<string>(defaultImage)

    React.useEffect(() => {
        axios.get(`http://localhost:3001/img/${props.shopData.shop_image}`, { responseType: 'blob' })
        .then(response => {
            const objectUrl: string = URL.createObjectURL(response.data);
            setImageSrc(objectUrl);
            console.log(imageSrc)
        });
    }, []);

    return (
        <div className="shops-about__item">
            <NavLink to={`/${props.shopData.shop_name}`}><img className="shops-about__image" src={imageSrc} loading="lazy" alt="shops-about__image" /></NavLink>
            <div className="shops-about__description">{props.shopData.shop_name}</div>
        </div>
    )
}

export default ShopCard