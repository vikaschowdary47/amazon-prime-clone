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

                // return req;
        
        }
        fetchData();
    },[])
    console.log(movies)
    return (
        // <div className="row">
            <Carousel controls='false' wrap="false">
                
            {/* <div className="top__images"> */}
        {movies.map(movie => (
            <Carousel.Item controls='false'>
            <img src={`${baseUrl}${movie.backdrop_path}`} 
            alt={movie.title}
            key={movie.id} 
            className="top__image d-block w-100"/>
            </Carousel.Item>
        ))}
        
        {/* </div> */}
        
        </Carousel>
        // </div>
    )
}
