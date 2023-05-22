import { modalWindowInfoType } from "./store"

let modalWindowInfo: modalWindowInfoType = {
    autorisationWindowOpened: false,
    newCategoryWindowOpened: false,
    newShopWindowOpened: false,
    newProductWindowOpened: false,
}

let modalWindowsReducer = (state = modalWindowInfo, action: any,) => {
    switch (action.type) {
        case "changeAutorisationWindowStatus": 
            return {...state, autorisationWindowOpened: !state.autorisationWindowOpened} 
        case "changeNewShopWindowStatus": 
            return  {...state, newShopWindowOpened: !state.newShopWindowOpened}
        case "changeNewCategoryWindowStatus":
            return {...state, newCategoryWindowOpened: !state.newCategoryWindowOpened}
        case "changeNewProductWindowStatus":
            return {...state, newProductWindowOpened: !state.newProductWindowOpened}
        case "toggleAllWindowsToInactive":
            let newModalWindowInfo: any = {}
            for (let windowStatus in state) {
                newModalWindowInfo[windowStatus] = false
            }
            return newModalWindowInfo
        default: 
            return state
    }
}

export default modalWindowsReducer 