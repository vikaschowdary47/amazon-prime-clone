import React,{useState,useEffect} from 'react';
import instance from '../axios'
import axios from 'axios'
import './Row.css'


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
         if(commingSoon){
            const getCommingSoon = async() => {
                await axios.get(fetchUrl)
                .then(res => console.log(res))
                getCommingSoon() ;
            }
        }
        
    },[fetchUrl])


    return (
        <div className="row">
            <h3>{title}</h3>
            <div className="poster__images">
                {movies.map(movie => (
                        <img src={`${baseUrl}${isLarge ? movie.poster_path:movie.backdrop_path}`} 
                        key={movie.id}
                        // width="150px"
                        // height="200px"
                        className={`img__poster ${isLarge && "poster__imagesLarge"}`}
                        alt={movie.title}/>
                    
                ))}
                </div>
       

        </div>
    )
}

