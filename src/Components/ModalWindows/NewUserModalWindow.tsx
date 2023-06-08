import React from "react";
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from "react-redux";

function NewUserModalWindow () {
    const dispatch = useDispatch();
    const windowStatus = useSelector((state: any) => state.modalWindowsReducer.newUserWindowOpened)

    function closeAllModalWindows () {
        dispatch({type: "changeNewUserModalWindow"})
        dispatch({type: "changeShadowBackgroundStatus"})
    }

    if (!windowStatus) return null;
    const portalDiv = document.getElementById('modal-root') as Element;

    return (
        ReactDOM.createPortal(
            <div className={"autorisation-modal-window modal-window " + (windowStatus ? "" : "inactive")}>
                <span className="window-closer" onClick={closeAllModalWindows}>
                    <div className="window-closer__inner"></div>
                </span>
                <input type="text" className="modal-window-input" placeholder="Введите логин"/>
                <input type="password" className="modal-window-input" placeholder="Введите пароль"/>
                <input type="password" className="modal-window-input" placeholder="Поторно введите пароль"/>
                <div className="modal-window-checkbox">
                    <input className="modal-window-checkbox__field" type="checkbox" id="admin-roots"/>
                    <label htmlFor="admin-roots">Наделить правами администратора</label>
                </div>
                <button className="modal-window-button" onClick={closeAllModalWindows}>Добавить пользователя</button>
            </div>,
            portalDiv
        )
    )
}

export default NewUserModalWindow;