import React from "react";
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { productType } from "../../store/store";
import defaultImage from '../../img/shop-logo.png'

function ProductCard (props: {productData: productType}) {
    const [imageSrc, setImageSrc] = useState<string>(defaultImage);
  
    useEffect(() => {
      axios
        .get(`http://localhost:3001/img/${props.productData.product_image}`, { responseType: 'blob' })
        .then((response) => {
          const objectUrl: string = URL.createObjectURL(response.data);
          setImageSrc(objectUrl);
        });
    }, [props.productData.product_image]);
  
    const memoizedImageSrc = useMemo(() => imageSrc, [imageSrc]);

    return (
        <div className="product-about__item">
            <NavLink to={`${props.productData.product_name}/`}>
                <img className="product-about__image" src={memoizedImageSrc} loading="lazy" alt="shops-about__image" />
            </NavLink>
            <div className="product-about__description">{props.productData.product_name}</div>
        </div>
    )
}

export default ProductCard