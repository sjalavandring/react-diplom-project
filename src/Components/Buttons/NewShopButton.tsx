import React from "react";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function NewShopButton () {
    const dispatch = useDispatch()

    function changeNewShopWindowVisibility () {
        dispatch({type: "changeShadowBackgroundStatus"})
        dispatch({type: "changeNewShopWindowStatus"})
    }

    return (
        <button className="modal-open-button" onClick={changeNewShopWindowVisibility}>Добавить магазин</button>
    )
}

export default NewShopButton