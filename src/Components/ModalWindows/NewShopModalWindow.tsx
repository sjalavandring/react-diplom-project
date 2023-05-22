import React from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";

const NewShopModalWindow = () => {
    const dispatch = useDispatch();
    const shopModalWindowStatus = useSelector((state: any) => state.newShopModalWindowReducer);
    
    function closeAllModalWindows () {
        dispatch({type: "changeNewShopWindowStatus"})
        dispatch({type: "changeShodowBackgroundStatus"})
    }

    if (!shopModalWindowStatus) return null;
    const portalDiv = document.getElementById('modal-root') as HTMLElement;

    return (
        ReactDOM.createPortal (
            <div className="new-shop-modal-window modal-window">
                <span className="window-closer" onClick={closeAllModalWindows}>
                    <div className="window-closer__inner"></div>
                </span>
                <input type="text" className="modal-window-input" placeholder="Название магазина"/>
                <button className="modal-window-button" onClick={closeAllModalWindows}>Отправить</button>
            </div>,
            portalDiv
        )

    )
};

export default NewShopModalWindow;