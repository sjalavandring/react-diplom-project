import {combineReducers, createStore} from 'redux'

import themeReducer from './themeReducer'
import visuallyModeReducer from './visuallyImpairedReducer'

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
    productsList: {
        productId: number,
        productName: string,
        productImage: string,
    }[] | [],
}

type productType = {
    productId: number,
    productName: string,
    productImage: string,
}

let shopsInfo: storeType[] = [
    // {
    //     shop_id: 1,
    //     shop_name: 'name1',
    //     date_of_create: '26.04.2023',
    //     date_of_delete: 'null',
    //     categoriesList: [
    //         {
    //             category_id: 1,
    //             category_name: 'categoryName1',
    //             category_image: 'categoryImage1',
    //             productsList: [
    //                 {
    //                     productId: 1,
    //                     productName: 'productName1',
    //                     productImage: 'product image 1',
    //                 },
    //                 {
    //                     productId: 2,
    //                     productName: 'productName2',
    //                     productImage: 'productImage2',
    //                 }
    //             ]
    //         },
    //         {
    //             category_id: 2,
    //             category_name: 'categoryName2',
    //             category_image: 'categoryImage1',
    //             productsList: [
    //                 {
    //                     productId: 1,
    //                     productName: 'productName1',
    //                     productImage: 'product image 1',
    //                 },
    //                 {
    //                     productId: 2,
    //                     productName: 'productName2',
    //                     productImage: 'productImage2',
    //                 }
    //             ]
    //         },
    //     ]
    // },
]

let shopsReducer = (state = shopsInfo, action: any,) => {
    switch (action.type) {
        case "setNewState": 
            console.log(action.newShopsList)
            return action.newShopsList
        default: 
            return state
    }
}

const rootReducer = combineReducers({shopsReducer, themeReducer, visuallyModeReducer})

const store = createStore(rootReducer)

export {store}
export type { storeType }
