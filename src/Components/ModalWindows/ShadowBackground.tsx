import React from "react";
import ReactDOM from 'react-dom'
import { useSelector, useDispatch } from "react-redux";


function ShadowBackground () {
    const dispatch = useDispatch();
    const backgroundStatus = useSelector((state: any) => state.shadowBackgroundReducer.shadowBackActive)
    const portalDiv = document.getElementById('modal-root') as HTMLElement;

    function closeAllModalWindows () {
        dispatch({type: "toggleAllWindowsToInactive"})
        dispatch({type: "changeShodowBackgroundStatus"})
    }

    if (!backgroundStatus) return null

    return (
        ReactDOM.createPortal (
            <div className="shadowBack" onClick={closeAllModalWindows}></div>,
            portalDiv
        )
    )
}

export default ShadowBackground