import React from "react";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function NewCategoryButton () {
    const dispatch = useDispatch()

    function changeAutorisationWindowVisibility () {
        dispatch({type: "changeShodowBackgroundStatus"})
        dispatch({type: "changeNewShopWindowStatus"})
    }

    return (
        <button className="modal-open-button" onClick={changeAutorisationWindowVisibility}>Добавить категорию</button>
    )
}

export default NewCategoryButton