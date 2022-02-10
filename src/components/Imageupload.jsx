import React from 'react'

function Imageupload() {
    const upload=e=>{
        e.preventDefault()
        let image = e.target.image.value
        
        console.log(image)
    }
    return (
        <div>
            <form onSubmit={upload}>
                   <input type='file' name='image'  />
                   <button type='submit'>Submit </button>
            </form>
        </div>
    )
}

export default Imageupload
