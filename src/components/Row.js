import React,{useState,useEffect} from 'react';
import instance from '../axios'
import './Row.css'
import {Link} from 'react-router-dom'
import axios from 'axios'






export const Row = ({title,fetchUrl,isLarge,commingSoon,queries}) => {
    const [movies,setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original"
    const API_KEY = 'a29fd5631c37293dbdf72e664eaacbdc'
      

    useEffect(()=> {
        
        
        const getMovies = async() => {
            await instance.get(fetchUrl)
            .then(res => {
             setMovies(res.data.results)
            })
        }
         getMovies();

         const getSimilar = async() => {
            await axios.get(`https://api.themoviedb.org/3/movie/${queries}/similar?api_key=${API_KEY}&language=en-US`)
            .then(res => {
                setMovies(res.data.results)
            })
        }
        getSimilar()
        
    },[fetchUrl,queries])


    return (
        <div className="row">
            <h3>{title}</h3>
            <div className="poster__images">
                {movies.map(movie => (
                    <Link to={`/movie/?id=${movie.id}`} className='image__link'>
                        <img src={`${baseUrl}${isLarge ? movie.poster_path:movie.backdrop_path}`} 
                        key={movie.id}
                        className={`img__poster ${isLarge && "poster__imagesLarge"} ${commingSoon && 'poster_different'}`}
                        alt={movie.title}/>
                        </Link>
                ))}
                </div>
       

        </div>
    )
}

