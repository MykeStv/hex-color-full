import React from 'react'

const Color = () => {
    const styleColor = {
        backgroundColor: 'green',
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }

    return (
        <>
            <div style={styleColor}>
                <span>#something</span>
            </div>
        </>
    )
}

export default Color