import React,{useState,useEffect} from 'react'
import axios from 'axios'
import queryString from 'query-string'

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
    },[])
    
    // console.log(movies);
    return (
        <div>
            {movies.map(item => (
                <img key={item.id} src={`${baseUrl}${item.backdrop_path}`} alt={item.title} />
            ))}
        </div>
    )
}
