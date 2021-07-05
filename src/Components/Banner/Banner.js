import React, { useEffect, useState } from 'react'
import'./Banner.css'
import axios from '../axios'
import {API_KEY , imageUrl} from '../../constants/constants'


function Banner() {

        const [movie, setMovie] = useState()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data.results[0]);
            setMovie(response.data.results[Math.floor(Math.random() * 19)])

        })
    }, [])

    
    return (
        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :''}`}} className='banner'>
            <div className="contents">
            <h1 className='title'>{movie ? movie.title ||movie.name:''}</h1>
            <div className="baanner_buttons">
                <button className='button'>Play</button>
                <button className="button">More Info</button>
            </div>
            <h1 className="description">{movie ? movie.overview :''} </h1>
            </div>
            <div className="fade_bottom">

            </div>
            
        </div>
    )
}

export default Banner
