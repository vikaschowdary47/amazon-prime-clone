import React,{useState,useEffect} from 'react';
import instance from '../axios';
import requests from '../requests';
import './Top.css';
import Carousel from 'react-bootstrap/Carousel'

export const Top = () => {
    const [movies,setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original"



    useEffect(() => {
         const fetchData = async () => {
            const req = await instance.get(requests.fetchTopRated)
                    const random = req.data.results
                    const reduce = random.slice(0,6);
                    // console.log(reduce);
                    setMovies(reduce);

        
        }
        fetchData();
    },[])

    return (
            <Carousel>
                
        {movies.map(movie => (
            <Carousel.Item key={movie.id}>
            <img src={`${baseUrl}${movie.backdrop_path}`} 
            alt={movie.title}
            key={movie.id} 
            className="top__image d-block w-100"/>
            <small className="details">details</small>
            </Carousel.Item>
        ))}
        
        </Carousel>
    )
}
