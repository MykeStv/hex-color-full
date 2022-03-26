import React from 'react'
import RandomColors from '../components/RandomColors'

const index = () => {
    return (
        <div className='page'>
            <header className='header'>
                <h1>HexColor Random</h1>
            </header>
            <section className='container'>
                <RandomColors />
            </section>
            <footer className='footer'>
                Maycol S. Rincon
            </footer>

        </div>
    )
}

export default index