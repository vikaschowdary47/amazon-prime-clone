import React,{useState,useEffect} from 'react';
import instance from '../axios'
import './Row.css'
// import GridList from '@material-ui/core/GridList'
// import { makeStyles } from '@material-ui/core/styles';
// import GridListTile from '@material-ui/core/GridListTile';

export const Row = ({title,fetchUrl}) => {
    const [movies,setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original"

      

    useEffect(()=> {
        const getMovies = async() => {
            await instance.get(fetchUrl)
            .then(res => {
             console.log(res.data.results)
             setMovies(res.data.results)
            })
         }
         getMovies();
    },[fetchUrl])


    return (
        <div className="row">
            <h3>{title}</h3>
            <div className="poster__images">
                {movies.map(movie => (
                        <img src={`${baseUrl}${movie.poster_path}`} 
                        key={movie.id}
                        // width="150px"
                        // height="200px"
                        className="img__poster"
                        alt={movie.title}/>
                    
                ))}
                </div>
       

        </div>
    )
}

