import React, { useState } from 'react'
import { usePalette } from 'react-palette'
import '../css/homepage.css'
function Hero() {
    const [image, setImage] = useState('/images/plane black gray.svg')
    const { data } = usePalette(image)
    localStorage.setItem('color', data.vibrant)
    return (
        <div className='herosection'>
 
            <img src={image} alt={image} className='heroimage' />
            <div className='herocontent'>
                <h2 className='headline'>The management system</h2>
                <p className='headpara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore distinctio eius aspernatur. Aut ut ea possimus debitis architecto reprehenderit eius.</p>
                <button className='btn' style={{ display: 'block', margin: '0 auto', background: data.vibrant }}>let's start</button>
            </div>

        </div>
    )
}

export default Hero
