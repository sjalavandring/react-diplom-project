import React from "react";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function AutorisationButton () {
    const dispatch = useDispatch()

    function changeAutorisationWindowVisibility () {
        dispatch({type: "changeShodowBackgroundStatus"})
        dispatch({type: "changeAutorisationWindowStatus"})
    }

    return (
        <button className="authentication-button" onClick={changeAutorisationWindowVisibility}>Войти</button>
    )
}

export default AutorisationButton 