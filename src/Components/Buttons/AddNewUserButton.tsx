import React from "react";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function AddNewUserButton () {
    const dispatch = useDispatch()

    function changeNewUserWindowVisibility () {
        dispatch({type: "changeShadowBackgroundStatus"})
        dispatch({type: "changeNewUserModalWindow"})
    }

    return (
        <button className="modal-open-button" onClick={changeNewUserWindowVisibility}>Добавить пользователя</button>
    )
}

export default AddNewUserButton