import React, { useEffect, useState } from 'react'
import Color from './Color'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../App';


const RandomColors = () => {

    const hexcolor = useSelector((state) => state.color.colors)

    const dispatch = useDispatch()

    const { fetchData, createColor, deleteColors } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {

        fetchData()

    }, [])

    return (
        <>
            <div>
                <button onClick={() => { createColor() }}>Create hexcolor</button>
                <button onClick={() => { deleteColors() }}>Delete all</button>
            </div>

            <div>
                {
                    hexcolor.map(color => (
                        <Color key={color.id} hexColor={color} />
                    ))
                }
            </div>
        </>
    )
}

export default RandomColors