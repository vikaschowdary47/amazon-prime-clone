import React,{useState,useEffect} from 'react';
import instance from '../axios'
import './Row.css'
import {Link} from 'react-router-dom'



export const Row = ({title,fetchUrl,isLarge,commingSoon}) => {
    const [movies,setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original"

      

    useEffect(()=> {
        const getMovies = async() => {
            await instance.get(fetchUrl)
            .then(res => {
            //  console.log(res.data.results)
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

