import React,{useState,useEffect} from 'react'
import axios from 'axios'
import queryString from 'query-string'
import './Search.css'
import {Navigation} from './Navigation'


export const Search = (props) => {
const API_KEY = 'a29fd5631c37293dbdf72e664eaacbdc'
// const [query,setQuery] = useState('')
const [movies,setMovies] = useState([])
const baseUrl = "https://image.tmdb.org/t/p/original"
     

    useEffect(() => {

        const value = queryString.parse(props.location.search)
        const queries = value.q
        // console.log(queries)
        // setQuery(queries)
        const searchMovies = async () => {
            await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${queries}`)
                .then(res => {
                    // console.log(res.data.results);
                    setMovies(res.data.results)
                })
            }
        searchMovies();
    },[props.location.search])
    
    console.log(movies);
    return (
        <div>
            <Navigation searchBar/>

        <div className='search__body'>

            <div className="search__poster">
            {movies.map(item => (
                    // <div className="item__body">
                    <div className="group">
                        <div className="image">
                <img key={item.id} 
                src={`${baseUrl}${item.backdrop_path}`} 
                alt={item.name} 
                className="search__posters"/>
                </div>
                <div className="detail">
            <h6 style={{color:'white',display:'inline-block'}}>{`${item.name ? item.name : item.title}`}</h6><br />
            <small>
                {`${item.first_air_date ? item.first_air_date : item.release_date}`}</small>
            </div>
                </div>
                // </div>
            ))}
            </div>
        </div>
        </div>
    )
}
