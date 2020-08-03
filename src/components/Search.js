import React,{useEffect} from 'react'
import axios from 'axios'

export const Search = ({query}) => {
const API_KEY = 'a29fd5631c37293dbdf72e664eaacbdc'
const Query = query;
     

    useEffect(() => {
        const searchMovies = async () => {
            await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&language=en-US&query=${Query}`)
                .then(res => console.log(res.data.results))
                
                console.log(query)
            }
        searchMovies();
    },[query])
    

    return (
        <div style={{backgroundColor:'white'}}>
            <h1>{query}</h1>
        </div>
    )
}
