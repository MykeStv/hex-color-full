import React from 'react'
import RandomColors from '../components/RandomColors'

const index = () => {
    return (
        <div className='container'>
            <header className='navbar'>
                <h1>HexColor random</h1>
            </header>
            <section>
                <RandomColors />
            </section>
            <footer>
                Maycol
            </footer>

        </div>
    )
}

export default index