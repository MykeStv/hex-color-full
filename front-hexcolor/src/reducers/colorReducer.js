import { colorActions } from '../constant/actionTypes'



const reducer = (state = {colors:[]}, action) => {
    
    switch (action.type) {
        case colorActions.GET:
            return { 
                ...state, colors: action.data
            }
        case colorActions.CREATE:
            return {
                ...state, colors: [ ...state.colors, action.data]
            }
        case colorActions.DELETE:
            return {
                ...state, colors: []
            };
        
        default:
            return state;
    }
}

export default reducer;