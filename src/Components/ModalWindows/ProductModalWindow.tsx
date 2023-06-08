import { productType } from "../../store/store";
import { useState, useEffect, useMemo } from 'react'
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import axios from 'axios';

function ProductModalWindow(props: {productInfo: productType, imageSrc: string}) {
    const productModalWindowStatus = useSelector((state: any) => state.modalWindowsReducer.productWindowOpened)
    console.log(productModalWindowStatus)

    if (!productModalWindowStatus) return null;
    const portalDiv = document.getElementById('modal-root') as Element;

    return (
        ReactDOM.createPortal(
            <div className="product-modal-window modal-window">
                {/* <span className="window-closer">
                    <div className="window-closer__inner"></div>
                </span> */}
                <div className="product-about__item_modal">
                    <img className="product-about__image" src={props.imageSrc} loading="lazy" alt="shops-about__image" />
                    <div className="product-about__description">{props.productInfo.product_name}</div>
                </div>
                <div className="product-about__description">{props.productInfo.product_description}</div>
            </div>,
            portalDiv
        )
    )
}

export default ProductModalWindow