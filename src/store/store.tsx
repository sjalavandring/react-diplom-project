import {combineReducers, createStore} from 'redux'

import themeReducer from './themeReducer'

type storeType = {
    shop_id: number,
    shop_name: string,
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
    //     shopId: 1,
    //     shopName: 'name1',
    //     shopLogin: 'login1',
    //     shopPassword: 'password1',
    //     categoriesList: [
    //         {
    //             categoryId: 1,
    //             categoryName: 'categoryName1',
    //             categoryImage: 'categoryImage1',
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
    //             categoryId: 2,
    //             categoryName: 'categoryName2',
    //             categoryImage: 'categoryImage2',
    //             productsList: [
    //                 {
    //                     productId: 1,
    //                     productName: 'productName1',
    //                     productImage: 'productImage1',
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
    // {
    //     shopId: 1,
    //     shopName: 'name1',
    //     shopLogin: 'login1',
    //     shopPassword: 'password1',
    //     categoriesList: [
    //         {
    //             categoryId: 1,
    //             categoryName: 'categoryName1',
    //             categoryImage: 'categoryImage1',
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
    //             categoryId: 2,
    //             categoryName: 'categoryName2',
    //             categoryImage: 'categoryImage2',
    //             productsList: [
    //                 {
    //                     productId: 1,
    //                     productName: 'productName1',
    //                     productImage: 'productImage1',
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
    // {
    //     shopId: 1,
    //     shopName: 'name1',
    //     shopLogin: 'login1',
    //     shopPassword: 'password1',
    //     categoriesList: [
    //         {
    //             categoryId: 1,
    //             categoryName: 'categoryName1',
    //             categoryImage: 'categoryImage1',
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
    //             categoryId: 2,
    //             categoryName: 'categoryName2',
    //             categoryImage: 'categoryImage2',
    //             productsList: [
    //                 {
    //                     productId: 1,
    //                     productName: 'productName1',
    //                     productImage: 'productImage1',
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

const rootReducer = combineReducers({shopsReducer, themeReducer})

const store = createStore(rootReducer)

export {store}
export type { storeType }
