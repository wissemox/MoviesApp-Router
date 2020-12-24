import React from 'react'
import Rate from './Rate'
import './Najma.css'
const Najma = ({searchNajma,setNajma}) => {
    return (
        <div className="Najmaa">
    <Rate setNajma={setNajma} rating={searchNajma} /> 
        </div>
    )
}

export default Najma
