import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import defaultImage from '../../img/shop-logo.png'

const NewShopModalWindow = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [shopName, setShopName] = useState<string>('Название магазина');
    const dispatch = useDispatch();
    const shopModalWindowStatus = useSelector((state: any) => state.modalWindowsReducer.newShopWindowOpened);
    
    function closeAllModalWindows () {
        dispatch({type: "changeNewShopWindowStatus"})
        dispatch({type: "changeShadowBackgroundStatus"})
    }

    useEffect(() => {
        setSelectedImage(null);
        setPreviewImage(null);
        setShopName('Название магазина')
    }, [shopModalWindowStatus]);

    if (!shopModalWindowStatus) return null;
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
        setShopName(event.target.value)
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
                            <div className="shops-about__item">
                                {/* <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} /> */}
                                <img className="shops-about__image modal-window-preview-image" src={previewImage} alt="Preview" />
                                <div className="shops-about__description">{shopName}</div>
                            </div>
                        ) : (
                            <div className="shops-about__item">
                                {/* <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} /> */}
                                <img className="shops-about__image modal-window-preview-image" src={defaultImage} alt="Preview" />
                                <div className="shops-about__description">{shopName}</div>
                            </div>
                        )}
                    </div>
                </div>
                <input className="modal-window-preview-button" type="file" accept="image/*" onChange={handleImageChange} />
                <input type="text" className="modal-window-input" placeholder="Название магазина" onChange={nameChangerHandler}/>
                <button className="modal-window-button" onClick={closeAllModalWindows}>Отправить</button>
            </div>,
            portalDiv
        )

    )
};

export default NewShopModalWindow;