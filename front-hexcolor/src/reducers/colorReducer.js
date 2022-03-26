import { colorActions } from '../constant/actionTypes'



const reducer = (state = {colors:{}}, action) => {
    switch (action.types) {
        case colorActions.GET:
            return ;
        case colorActions.CREATE:
            return ;
        case colorActions.DELETE:
            return ;
        
        default:
            return state;
    }
}

export default reducer;