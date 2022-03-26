import { colorActions } from '../constant/actionTypes'

const url = "http://localhost:8080/color"

export const fetchData = () => async(dispatch) => {
    
    /* dispatch({
        type: colorActions.GET
    }) */

    return fetch(url, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        dispatch({ type: colorActions.GET, data: json })
        
    })

}

export const createColor = () => async(dispatch) => {
    
    return fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    })
    .then(response => response.json())
    .then(json => {
        console.log(json)
        dispatch({ type: colorActions.CREATE, data: json })
        
    })

}

export const deleteColors = () => async(dispatch) => {
    
    return fetch(`${url}/delete`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    })
    .then(() => {
        dispatch({ type: colorActions.DELETE})
    })

}


