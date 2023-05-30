import React from "react";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function AutorisationButton () {
    const dispatch = useDispatch()

    function changeAutorisationWindowVisibility () {
        dispatch({type: "changeShadowBackgroundStatus"})
        dispatch({type: "changeAutorisationWindowStatus"})
    }

    return (
        <button className="modal-open-button" onClick={changeAutorisationWindowVisibility}>Войти</button>
    )
}

export default AutorisationButton 