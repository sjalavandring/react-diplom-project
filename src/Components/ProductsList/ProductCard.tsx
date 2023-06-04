import React from "react";
import { useState, useEffect, useMemo } from 'react'
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { productType } from "../../store/store";
import defaultImage from '../../img/shop-logo.png'
import ProductModalWindow from "../ModalWindows/ProductModalWindow";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function ProductCard (props: {productData: productType}) {
    const [imageSrc, setImageSrc] = useState<string>(defaultImage);
    const dispatch = useDispatch()

    function changeProductWindowVisibility () {
        dispatch({type: "changeShadowBackgroundStatus"})
        dispatch({type: "changeProductWindowStatus"})
    }
  
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
            <img className="product-about__image" src={memoizedImageSrc} onClick={changeProductWindowVisibility} loading="lazy" alt="shops-about__image" />
            <div className="product-about__description">{props.productData.product_name}</div>
            <ProductModalWindow productInfo={props.productData} imageSrc={imageSrc}/>
        </div>
    )
}

export default ProductCard