import React,{useState,useEffect} from 'react';
import instance from '../axios'

export const Row = ({title,fetchUrl}) => {
    const [movies,setMovies] = useState([]);
    
    useEffect(()=> {
        const getMovies = async() => {
            await instance.get(fetchUrl)
            .then(res => {
             console.log(res.data.results)
             setMovies(res.data.results)
            })
         }
         getMovies();
    },[])

   
    

    return (
        <div>
            <h1>{title}</h1>
            <ul>
                {movies.map(movie => (
                    <li>
                        <h1>{movie.title}</h1>
                        <img src='https://image.tmdb.org/t/p/original' {movie.poster_path} />
                    </li>
                ))}
            </ul>

        </div>
    )
}

