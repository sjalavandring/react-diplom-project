import React from "react";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function NewProductButton () {
    const dispatch = useDispatch()

    function changeAutorisationWindowVisibility () {
        dispatch({type: "changeShodowBackgroundStatus"})
        dispatch({type: "changeNewProductWindowStatus"})
    }

    return (
        <button className="modal-open-button" onClick={changeAutorisationWindowVisibility}>Добавить категорию</button>
    )
}

export default NewProductButton