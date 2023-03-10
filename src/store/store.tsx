import {combineReducers, createStore} from 'redux'

type storeType = {
    id: number,
    name: string,
}

let productionInfo: storeType[] = [
    {
        id: 1,
        name: 'Category1'
    },
    {
        id: 2,
        name: 'Category2'
    },
    {
        id: 3,
        name: 'Category3'
    },
    {
        id: 4,
        name: 'Category4'
    },
    {
        id: 5,
        name: 'Category5'
    },
    {
        id: 6,
        name: 'Category5'
    }
]

let productionReducer = (state = productionInfo, action: any) => {
    switch (action.type) {
        default: 
            return state
    }
}

const rootReducer = combineReducers({productionReducer})

const store = createStore(rootReducer)

export {store}
export type { storeType }
