import React from 'react'
import './Najma.css'
const SearchMovie = ({ setSearchbyname }) => {
    return (
        <div className="inpput">
            <input type="text" onChange={((e)=>setSearchbyname(e.target.value))}/> 
        </div>
    )
}

export default SearchMovie
