type visuallyImpairedType = {
    isModeActive: boolean,
}

let visuallyModeState: visuallyImpairedType  = {
    isModeActive: false,
} 

let visuallyModeReducer = (state = visuallyModeState, action: any) => {
    switch (action.type) {
        case 'visuallyModeChanger': {
            return {isModeActive: !state.isModeActive}
        }
        default: 
            return state
    }
}


export type {visuallyImpairedType}
export default visuallyModeReducer