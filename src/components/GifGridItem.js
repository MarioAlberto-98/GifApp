import React from 'react'
import '../searchgif.css'
import { FcMms } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";
import { FcLike  } from "react-icons/fc";
export const GifGridItem = ({title, url}) => {

  return (
    <> 
    <div className='card-img-text'>
      <p className='paragraph2'><FcLike />  Favorite</p>
        <div className="card">
          
           <img className='card' src={url} alt={title} />
        </div>
        <h1 className='nameText'><FcMms/> Name:</h1>
          <p className='paragraph'><FcApproval /> {title}</p>
    </div>  
    
    </>
  ) 
 
}

