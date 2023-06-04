import { productType } from "../../store/store";
import { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

function ProductModalWindow(props: {productInfo: productType, imageSrc: string}) {
    const productModalWindowStatus = useSelector((state: any) => state.modalWindowsReducer.changeProductWindowStatus)
    console.log(productModalWindowStatus)

    if (!productModalWindowStatus) return null;
    const portalDiv = document.getElementById('modal-root') as Element;

    return (
        ReactDOM.createPortal(
            <div className="product-modal-window modal-window">
                <img className="product-about__image" src={props.imageSrc} loading="lazy" alt="shops-about__image" />
                <div>{props.productInfo.product_name}</div>
                <div>{props.productInfo.product_description}</div>
            </div>,
            portalDiv
        )
    )
}

export default ProductModalWindow