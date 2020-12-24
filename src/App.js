import React ,{useState} from 'react'
import {moviesData} from './Compents/SearchMovie/MoviesData'
import MoviesList from './Compents/MoviesList/Movies'
import './App.css';
import AddMovie from './Compents/AddMovies/Addmovies'
import SearchMovie from './Compents/SearchMovie/SearchMovie'
import Najma from './Compents/SearchMovie/Najma'
import MoviesCard from './Compents/MovieCard/MoviesCard'
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Ahlaabik from './Compents/Hooks/AHLabik'
import ADA from './Compents/wiw/ADA'
import Descraption from './Compents/wiw/descraption'




function App() {
  const [Test03 , setTest03] = useState("aaa")
  const [moviesList,setMovieslist] = useState(moviesData)
  const [searchByname, setSearchbyname] = useState("")
  const addmoviess = (newVal) => { 
    setMovieslist([...moviesList,newVal])
  }
  
  const [searchNajma , setNajma] = useState(1)
  return (
    
    <div className="App">
      {console.log(Test03)}
      <SearchMovie  setSearchbyname={setSearchbyname}/>
      
      <div className="BackGround">
        {/* Router1  */}
        <Router>
          <Route exact path='/'>
            <MoviesList setTest03={setTest03} moviesList={moviesList} searchByname={searchByname}
            searchNajma={searchNajma}/>
            <AddMovie addmoviess={addmoviess}/>
            <Najma  searchNajma={searchNajma}
      setNajma={setNajma}/>
          </Route>
    {/* chnwa bch nasta3ml 1.Nested routing with Path parameters  */}
    {/* Router 2  */}
    {/* <Route  exact path="/">
    */}
    <Route  path='/wissem/:movieId' render={(props)=><Descraption moviesList={moviesList} {...props} />}  />
    </Router>
    </div>
    </div>

  );
}

export default App;
