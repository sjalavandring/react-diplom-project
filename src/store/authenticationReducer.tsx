import { authenticationType } from "./store"

let shadowBackInfo: authenticationType= {
    isAuthorized: true,
    isAdmin: false,
}

let authenticationReducer = (state = shadowBackInfo, action: any,) => {
    switch (action.type) {
        case "completeAutorisation": 
            return {...state, isAuthorized: true} 
        default: 
            return state
    }
}

export default authenticationReducer