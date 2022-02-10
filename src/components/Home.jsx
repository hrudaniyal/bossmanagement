import React from 'react'
import Feedback from './Feedback'
import Hero from './Hero'
import Nav from './Nav'
import {Helmet} from 'react-helmet'
function Home() {
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Nav />
            <Hero />
        </div>
    )
}

export default Home
