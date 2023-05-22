import React from "react";
import { useSelector, useDispatch } from "react-redux";

function AutorisationModalWindow () {
    const dispatch = useDispatch();
    const windowStatus = useSelector((state: any) => state.modalWindowsReducer.autorisationWindowOpened)

    function closeAllModalWindows () {
        dispatch({type: "changeAutorisationWindowStatus"})
        dispatch({type: "changeShodowBackgroundStatus"})
    }

    return (
        <div className={"autorisation-modal-window modal-window " + (windowStatus ? "" : "inactive")}>
            <span className="window-closer" onClick={closeAllModalWindows}>
                <div className="window-closer__inner"></div>
            </span>
            <input type="text" className="modal-window-input" placeholder="Логин"/>
            <input type="password" className="modal-window-input" placeholder="Пароль"/>
            <button className="modal-window-button" onClick={closeAllModalWindows}>Отправить</button>
        </div>
    )
}

export default AutorisationModalWindow;