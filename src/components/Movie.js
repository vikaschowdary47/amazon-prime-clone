import React,{useEffect} from 'react'
import axios from 'axios'
import queryString from 'query-string'
import './Movie.css'



export const Movie = (props) => {
const API_KEY = 'a29fd5631c37293dbdf72e664eaacbdc'
const [detail,setDetail] = React.useState({})
const baseUrl = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        const value = queryString.parse(props.location.search)
        const queries = value.id
        console.log(queries)
        const getDetails = async () => {
            await axios.get(`https://api.themoviedb.org/3/movie/${queries}?api_key=${API_KEY}&language=en-US`)
                .then(res => {
                    console.log(res.data)
                    setDetail(res.data)
                })
        }
        getDetails();
    },[])

    return (
        <div>
            <div className='image'>
            <img src={`${baseUrl}${detail.poster_path}`} 
            width='200'
            height='200'
            />
            </div>
        </div>
    )
}
