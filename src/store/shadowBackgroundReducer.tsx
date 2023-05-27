import { modalWindowInfoType } from "./store"

let shadowBackInfo: {shadowBackActive: boolean}= {
    shadowBackActive: false,
}

let shadowBackgroundReducer = (state = shadowBackInfo, action: any,) => {
    switch (action.type) {
        case "changeShodowBackgroundStatus": 
            return {...state, shadowBackActive: !state.shadowBackActive} 
        default: 
            return state
    }
}

export default shadowBackgroundReducer