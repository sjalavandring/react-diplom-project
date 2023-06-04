import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import defaultImage from '../../img/shop-logo.png'


function NewProductModalWindow () {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [productName, setProductName] = useState<string>('Название товара');
    const dispatch = useDispatch();
    const productProductWindowStatus = useSelector((state: any) => state.modalWindowsReducer.newProductWindowOpened);
    
    function closeAllModalWindows () {
        dispatch({type: "changeNewProductWindowStatus"})
        dispatch({type: "changeShadowBackgroundStatus"})
    }

    useEffect(() => {
        setSelectedImage(null);
        setPreviewImage(null);
        setProductName('Название товара')
    }, [productProductWindowStatus]);

    if (!productProductWindowStatus) return null;
    const portalDiv = document.getElementById('modal-root') as Element;

    const handleImageChange = (e: any) => {
        const imageFile = e.target.files?.[0];
        if (imageFile) {
        setSelectedImage(imageFile);

        const reader = new FileReader();
        reader.onload = () => {
            setPreviewImage(reader.result as string);
        };
        reader.readAsDataURL(imageFile);
        }
    };

    const nameChangerHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProductName(event.target.value)
    }

    return (
        ReactDOM.createPortal (
            <div className="new-shop-modal-window modal-window">
                <span className="window-closer" onClick={closeAllModalWindows}>
                    <div className="window-closer__inner"></div>
                </span>
                <div className="modal-window-wrapper-preview">
                    <div className="modal-window-preview">
                        {previewImage ? (
                            <div className="category-about-item">
                                <div className="product-about__item product-about__item_modal">
                                    <img className="product-about__image modal-window-preview-image" src={previewImage} alt="Preview" />
                                    <div className="product-about__description">{productName}</div>
                                </div>
                            </div>
                        ) : (
                            <div className="category-about-item">
                                <div className="product-about__item product-about__item_modal">
                                    <img className="product-about__image modal-window-preview-image" src={defaultImage} alt="Preview" />
                                    <div className="product-about__description">{productName}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <input className="modal-window-preview-button" type="file" accept="image/*" onChange={handleImageChange} />
                <input type="text" className="modal-window-input" placeholder="Название товара" onChange={nameChangerHandler}/>
                <input type="text" className="modal-window-input" placeholder="Ключевые слова"/>
                <button className="modal-window-button" onClick={closeAllModalWindows}>Отправить</button>
            </div>,
            portalDiv
        )

    )
}

export default NewProductModalWindow;