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
        <div className='content'>
            <div className='btn-container'>
                <button className='btn btn-create' onClick={() => { createColor() }}>
                    Create hexcolor
                </button>
                <button className='btn btn-delete' onClick={() => { deleteColors() }}>
                    Delete all
                </button>
            </div>

            <div className='color-container'>
                {
                    hexcolor.map(color => (
                        <Color key={color.id} hexColor={color} />
                    ))
                }
            </div>
        </div>
    )
}

export default RandomColors