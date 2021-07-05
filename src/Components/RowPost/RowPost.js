import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import axios from '../axios'
import {imageUrl,API_KEY} from '../../constants/constants'


function RowPost(props) {

        const [movies, setMovies] = useState([])
        const [urlId, setUrlId] = useState('')

        useEffect(() => {
            axios.get(props.url).then((response)=>{
              //  console.log(response.data);
                setMovies(response.data.results)
                
            })
            
            
        },)

        const opts ={
            height:'390' ,
            width:'100%' ,
            
            playerVars:{

                
                autoplay: 1 ,
            },
        };
            const handleMovie =(id)=>{
                
                
                axios.get(`https://api.themoviedb.org/3//movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{

                    console.log(response.data.results);
                    if(response.data.results.length!==0){
                        setUrlId(response.data.results[0])
                    }
                })

            }


    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>

                {movies.map((obj,index)=>
                    
                    <img onClick={()=>handleMovie(obj.id)} key={index} className={props.isSmall ?'smallposter' : 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />

                )}           

            </div>
           {urlId &&    <YouTube opts={opts} videoId={urlId.key} /> }
        </div>
    )
}

export default RowPost