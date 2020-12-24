import React from 'react'

const Rate = ({rating,setNajma}) => {
const stars = (x) => { 
    let starsArray = []
    for(let i = 1 ; i<=5 ; i++) {
        if(i <= x) { 
            starsArray.push(<span onClick={()=>setNajma(i)}>★</span>)
        }else { 
            starsArray.push(<span onClick={()=>setNajma(i)}>☆</span>)
        }
    } 
    return starsArray
}
    return (
        
           
        stars(rating)
        
    )
}
Rate.defaultProps ={
    setNajma : () =>{}
}
export default Rate
