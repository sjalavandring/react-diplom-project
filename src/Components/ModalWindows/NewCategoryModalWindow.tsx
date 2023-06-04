import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";
import defaultImage from '../../img/shop-logo.png'

function NewCategoryModalWindow () {
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [categoryName, setCategoryName] = useState<string>('Название каталога');
    const dispatch = useDispatch();
    const categoryModalWindowStatus = useSelector((state: any) => state.modalWindowsReducer.newCategoryWindowOpened);
    
    function closeAllModalWindows () {
        dispatch({type: "changeNewCategoryWindowStatus"})
        dispatch({type: "changeShadowBackgroundStatus"})
    }

    useEffect(() => {
        setSelectedImage(null);
        setPreviewImage(null);
        setCategoryName('Название каталога')
    }, [categoryModalWindowStatus]);

    if (!categoryModalWindowStatus) return null;
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
        setCategoryName(event.target.value)
    }

    return (
        ReactDOM.createPortal (
            <div className="new-category-modal-window modal-window">
                <span className="window-closer" onClick={closeAllModalWindows}>
                    <div className="window-closer__inner"></div>
                </span>
                <div className="modal-window-wrapper-preview">
                    <div className="modal-window-preview">
                        {previewImage ? (
                            <div className="category-about__item">
                                <img className="category-about__image modal-window-preview-image" src={previewImage} alt="Preview" />
                                <div className="category-about__description">{categoryName}</div>
                            </div>
                        ) : (
                            <div className="shops-about__item">
                                <img className="category-about__image modal-window-preview-image" src={defaultImage} alt="Preview" />
                                <div className="category-about__description">{categoryName}</div>
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
}

export default NewCategoryModalWindow;