import React from "react";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function NewShopButton () {
    const dispatch = useDispatch()

    function changeAutorisationWindowVisibility () {
        dispatch({type: "changeShodowBackgroundStatus"})
        dispatch({type: "changeNewShopWindowStatus"})
    }

    return (
        <button className="modal-open-button" onClick={changeAutorisationWindowVisibility}>Добавить магазин</button>
    )
}

export default NewShopButton