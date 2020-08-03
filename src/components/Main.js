import React from 'react'
import {Navigation} from './Navigation'
import {Top} from './Top'
import {Row} from './Row'
import requests from '../requests'


export const Main = () => {
    return (
        <div>
            <Navigation searchBar/>
            <Top />
            <Row title='Trending movies' fetchUrl={requests.fetchTrending} isLarge/>
            <Row title='Action movies' fetchUrl={requests.fetchActionMovies} />
            <Row title='Romantic movies' fetchUrl={requests.fetchRomanticMovies}/>
            <Row title='Comming soon' fetchUrl={requests.fetchCommingSoon} commingSoon/>
            <Row title='Horror movies' fetchUrl={requests.fetchHorrorMovies}/>
            <Row title='Thriller movies' fetchUrl={requests.fetchThrillerMovies}/>
            <Row title='Documentary movies' fetchUrl={requests.fetchDocumentaryMovies}/>
            <Row title='Tv Shows' fetchUrl={requests.fetchTv}/>
            </div>
    )
}
