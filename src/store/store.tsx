import {combineReducers, createStore} from 'redux'

import themeReducer from './themeReducer'
import visuallyModeReducer from './visuallyImpairedReducer'
import modalWindowsReducer from './modalWindowsReducer'
import shadowBackgroundReducer from './shadowBackgroundReducer'
import authenticationReducer from './authenticationReducer'


type storeType = {
    shop_id: number,
    shop_name: string,
    shop_image: string,
    date_of_create: string,
    date_of_delete: string,
    categoriesList: categoryType[] | [],
}

type categoryType = {
    category_id: number,
    category_name: string,
    category_image: string,
    productsList: productType[] | [],
}

type productType = {
    product_id: number,
    product_name: string,
    product_image: string,
    product_description: string,
    date_of_create: string,
    date_of_delete: string,
    key_words: string,
}

type modalWindowInfoType = {
    autorisationWindowOpened: boolean,
    newUserWindowOpened: boolean,
    newShopWindowOpened: boolean,
    newCategoryWindowOpened: boolean,
    newProductWindowOpened: boolean,
    productWindowOpened: boolean,
}

type authenticationType = {
    isAuthorized: boolean;
    isAdmin: boolean;
}

let shopsInfo: storeType[] = []

let shopsReducer = (state = shopsInfo, action: any,) => {
    switch (action.type) {
        case "setNewState": 
            return action.newShopsList
        default: 
            return state
    }
}

const rootReducer = combineReducers({shopsReducer, themeReducer, visuallyModeReducer, modalWindowsReducer, shadowBackgroundReducer, authenticationReducer})

const store = createStore(rootReducer)

export {store}
export type { storeType, modalWindowInfoType, categoryType, productType, authenticationType }
