import React , {useState} from 'react'
import {moviesData} from '../SearchMovie/MoviesData'
import {Link} from'react-router-dom'
const Descraption = (props) => { 
    
    
    
return ( 
    
    <div className="oead">
        <div className="MoviesNae">
     <Link to={'/'}>   <button> Return</button> </Link>  
     <div className="moviesa">
      <p>zad</p>  {moviesData.find((el)=>el.Name===props.match.params.movieId).vide}
       </div>
    {console.log(moviesData)}
    <h1>Descraption movies  {props.match.params.movieId}</h1>
    </div>
    <h1 className="Descraption">
    {moviesData.find((el)=>el.Name===props.match.params.movieId).Descraption}
    </h1>

    
    {console.log(props.match.params.movieId)}
   
    </div>
)
}
export default  Descraption