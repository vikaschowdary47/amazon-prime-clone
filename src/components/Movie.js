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
        // console.log(queries)
        const getDetails = async () => {
            await axios.get(`https://api.themoviedb.org/3/movie/${queries}?api_key=${API_KEY}&language=en-US`)
                .then(res => {
                    console.log(res.data)
                    setDetail(res.data)
                })
        }
        getDetails();
    },[props.location.search])

    return (
        <div>
            <div className='image'>
            <img src={`${baseUrl}${detail.poster_path}`} 
            alt={detail.original_title}
            width='200'
            height='200'
            />
            <h1><b>{`${detail.name ? detail.name : detail.title}`}</b></h1>
            </div>
            <div className='movie__details'>
                <ul>
             <li>Status:{detail.status}</li>
             <li>Release Date: {detail.release_date} </li>
    <li>Goto Movie: <a href={detail.homepage} >{detail.homepage}</a></li>
    <li style={{textAlign:'left',marginLeft:'50px'}}>Overview:<p>{detail.overview}</p></li>
                </ul>
            </div>

        </div>
    )
}
