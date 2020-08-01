import React,{useState,useEffect} from 'react';
import instance from '../axios'
import GridList from '@material-ui/core/GridList'
import { makeStyles } from '@material-ui/core/styles';
import GridListTile from '@material-ui/core/GridListTile';

export const Row = ({title,fetchUrl}) => {
    const [movies,setMovies] = useState([]);
    const baseUrl = "https://image.tmdb.org/t/p/original"

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          overflow: 'hidden',
          backgroundColor: theme.palette.background.paper
        },
        gridList: {
          flexWrap: 'nowrap',
          // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
          transform: 'translateZ(0)',
        },
        titleBar: {
          background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
        },
      }));
      

    useEffect(()=> {
        const getMovies = async() => {
            await instance.get(fetchUrl)
            .then(res => {
             console.log(res.data.results)
             setMovies(res.data.results)
            })
         }
         getMovies();
    },[fetchUrl])

   
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>{title}</h1>
            <GridList className={classes.gridList} cols={2.5}>
                {movies.map(movie => (
                
                       <GridListTile>
                        <img src={`${baseUrl}${movie.poster_path}`} 
                        width="10px"
                        height="10px"
                        alt={movie.title}/>
                        </GridListTile>
                    
                ))}
        </GridList>

        </div>
    )
}

