import React ,{useState}  from 'react'
import './MoviesCard.css'
import '../SearchMovie/Rate'
import Rate from '../SearchMovie/Rate'
import {BrowserRouter as Router} from 'react-router-dom'
import {Link} from 'react-router-dom'


function MoviesCard({el :{id,rating,image,Name,story},setTest03}) {
  const [test , setTest] =useState("")
const Test02 = (x) => { 
  setTest(x)
  setTest03(test)
}

  return (
    
    <div className="all">
      {console.log(test)}
    {/* Rating */}
    <div className="Rating"> <h3>{rating} </h3>
   <div className="najma"> <p><Rate rating={rating}/></p></div>
    </div>
    {/* img */} 
   <div  className="imgg"> <Link  to={`/wissem/${Name}`}> <img onClick={()=>Test02(Name)}  src={image}/>  </Link>   </div> 
   {/* Name */}
  
    <div className="name"><h5>{Name}</h5></div>
   
    <div className="storyy"> 
    <h5>Storie:</h5><p>{story}</p>  
    </div>
    
    </div>
  );
}


export default MoviesCard;
