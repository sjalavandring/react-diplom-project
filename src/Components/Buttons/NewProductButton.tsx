import React from "react";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function NewProductButton () {
    const dispatch = useDispatch()

    function changeNewProductWindowVisibility () {
        dispatch({type: "changeShadowBackgroundStatus"})
        dispatch({type: "changeNewProductWindowStatus"})
    }

    return (
        <button className="modal-open-button" onClick={changeNewProductWindowVisibility}>Добавить товар</button>
    )
}

export default NewProductButton