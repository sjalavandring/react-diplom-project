import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import modalWindowsReducer from "../../store/modalWindowsReducer";

const NewShopModalWindow = () => {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const dispatch = useDispatch();
    const shopModalWindowStatus = useSelector((state: any) => state.modalWindowsReducer.newShopWindowOpened);
    console.log(shopModalWindowStatus)
    
    function closeAllModalWindows () {
        dispatch({type: "changeNewShopWindowStatus"})
        dispatch({type: "changeShadowBackgroundStatus"})
    }

    useEffect (() => {
        setSelectedImage(null)
        setPreviewImage(null)
    }, [])

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

    return (
        ReactDOM.createPortal (
            <div className="new-shop-modal-window modal-window">
                <span className="window-closer" onClick={closeAllModalWindows}>
                    <div className="window-closer__inner"></div>
                </span>
                <div>
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {previewImage && (
                        <img src={previewImage} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
                    )}
                </div>
                <input type="text" className="modal-window-input" placeholder="Название магазина"/>
                <button className="modal-window-button" onClick={closeAllModalWindows}>Отправить</button>
            </div>,
            portalDiv
        )

    )
};

export default NewShopModalWindow;