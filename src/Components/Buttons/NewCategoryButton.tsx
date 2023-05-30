import React from "react";
import { useSelector, useDispatch } from 'react-redux/es/exports';

function NewCategoryButton () {
    const dispatch = useDispatch()

    function changeNewCategoryWindowVisibility () {
        dispatch({type: "changeShadowBackgroundStatus"})
        dispatch({type: "changeNewCategoryWindowStatus"})
    }

    return (
        <button className="modal-open-button" onClick={changeNewCategoryWindowVisibility}>Добавить категорию</button>
    )
}

export default NewCategoryButton