import { colorActions } from '../constant/actionTypes'

export const fetchData = () => async(dispatch) => {
    
    dispatch({
        type: colorActions.GET
    })

    const url = "http://localhost:8080/color"

    return fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => {
        dispatch({ type: colorActions.GET, data: json })
    })

}