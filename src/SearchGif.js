import React, {useState} from 'react'

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './searchgif.css'
import { FcPicture } from "react-icons/fc";

export const SearchGif = () => {
  //const caterogies= ['One Punch' , 'Samurai X', 'Dragon Ball'];
  const [categories ,setCategories] = useState(['SpiderMan']);
  
 // const handleAdd=()=>{
    //Two differents ways to add a data
    // setCategories([...categories, 'HunterXHunter]);
   // setCategories(cats => [...cats, 'HunterXHunter']);
 // }

 // Este button va dentro del return, para cuando se hace click, de mande llamar el metodo  <button onClick={handleAdd}>Agregar</button>
 // Este va dentro del return y dentro del map return <li key={category}>{category}</li> 
 return (
    <>
      <div className='searchSection'>
  
           
          <AddCategory setCategories={setCategories}/>
          <div>
            {
              categories.map(category =>(
               <GifGrid
               key={category}
               category={category}
               />
               ))
            }
        </div>
      </div>
    </>
  )
}
