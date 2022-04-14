import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import '../searchgif.css'
import { BiCategory } from "react-icons/bi";
export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3  className="wordsSearch  animate__animated animate__fadeIn"><BiCategory /> <b>Category: </b> { category } </h3>
            
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <hr className='barLine' />
            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}
