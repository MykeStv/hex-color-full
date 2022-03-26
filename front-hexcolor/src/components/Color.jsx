import React, { useEffect } from 'react'


const Color = ({ hexColor }) => {

    // console.log(hexColor);

    const styleColor = {
        backgroundColor: `${hexColor.color}`,
        width: '100px',
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    }

    return (
        <div className='color-content'>
            <div className='color-card'>
                <div style={styleColor}>
                    <span style={{ color: '#000' }}>{hexColor.color}</span>
                    <span style={{ color: '#fff' }}>{hexColor.color}</span>
                </div>
            </div>
        </div>
    )
}

export default Color