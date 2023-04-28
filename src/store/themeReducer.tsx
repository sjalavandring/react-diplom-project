type themeStateType = {
    isThemeDark: boolean,
}

let themeState: themeStateType  = {
    isThemeDark: false,
} 

let themeReducer = (state = themeState, action: any) => {
    switch (action.type) {
        case 'themeChanger': {
            return {isThemeDark: !state.isThemeDark}
        }
        default: 
            return state
    }
}


export type {themeStateType}
export default themeReducer