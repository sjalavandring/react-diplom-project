import {combineReducers, createStore} from 'redux'

type storeType = {
    shopId: number,
    shopName: string,
    shopLogin: string,
    shopPassword: string,
    categoriesList: categoryType[],
}

type categoryType = {
    categoryId: number,
    categoryName: string,
    categoryImage: string,
    productsList: productType[]
}

type productType = {
    productId: number,
    productName: string,
    productImage: string,
}

let shopsInfo: storeType[] = [
    {
        shopId: 1,
        shopName: 'name 1',
        shopLogin: 'login 1',
        shopPassword: 'password 1',
        categoriesList: [
            {
                categoryId: 1,
                categoryName: 'category name 1',
                categoryImage: 'category image 1',
                productsList: [
                    {
                        productId: 1,
                        productName: 'product name 1',
                        productImage: 'product image 1',
                    },
                    {
                        productId: 2,
                        productName: 'product name 2',
                        productImage: 'product image 2',
                    }
                ]
            },
            {
                categoryId: 2,
                categoryName: 'category name 2',
                categoryImage: 'category image 2',
                productsList: [
                    {
                        productId: 1,
                        productName: 'product name 1',
                        productImage: 'product image 1',
                    },
                    {
                        productId: 2,
                        productName: 'product name 2',
                        productImage: 'product image 2',
                    }
                ]
            },
        ]
    }
]

let shopsReducer = (state = shopsInfo, action: any) => {
    switch (action.type) {
        default: 
            return state
    }
}

const rootReducer = combineReducers({shopsReducer})

const store = createStore(rootReducer)

export {store}
export type { storeType }
