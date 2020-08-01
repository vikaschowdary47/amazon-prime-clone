import React from 'react'
import {Navigation} from './Navigation'
import {Top} from './Top'
import {Row} from './Row'
import requests from '../requests'


export const Main = () => {
    return (
        <div>
            <Navigation />
            <Top />
            <Row title='Trending movies' fetchUrl={requests.fetchTrending}/>
            <Row title='Action movies' fetchUrl={requests.fetchActionMovies}/>
            <Row title='Romantic movies' fetchUrl={requests.fetchRomanticMovies}/>
            </div>
    )
}
