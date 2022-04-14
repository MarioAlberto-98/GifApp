import React, {useState} from 'react';
import PropTypes from 'prop-types';
//import { getGifs } from '../helpers/getGifs';
import { BiSearchAlt } from "react-icons/bi";



export const AddCategory = ({setCategories}) => {
  
  const[inputValue, setInputValue]=useState('');
  
  const handleInputChange = (e) =>{
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
   // console.log('Submit hecho');

    if(inputValue.trim().length >2){
      setCategories(cats => [inputValue,...cats ]);
      setInputValue('');
    }

  }

  return (
   
    <form onSubmit={handleSubmit}> 
    
       <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search all the Gis and Images"
        
       />
      
    </form>
    
  )
}

AddCategory.propTypes = {
  setCategories:PropTypes.func.isRequired
}