import React, { useState } from 'react'
import './ImageComponent.css'
const ImageComponent = () => {
    
const imageUrl = "https://imgcdn.stablediffusionweb.com/2024/10/10/f7b87524-5dd3-4ab3-a72d-09d400b42d5c.jpg"
    
const  [currentLikes, SetCurrentLikes] = useState(1234)

const [isLiked , setIsLiked] = useState(false)



const likeButton = () => {

    if(isLiked){

          SetCurrentLikes(currentLikes -1)


    }else{
        
        SetCurrentLikes(currentLikes +1)
    }

    setIsLiked(!isLiked)

}


  return (
    <div>
          <div className="instagram-post-card">

      <div className="post-image-container">
        <img 
      
          src={imageUrl} 
          alt="A sample post image for UI practice" 
          className="post-image" 
        />
      </div>

  
      <div className="post-actions">

        <button
          className="like-button"
          aria-label="Like post"

          onClick={likeButton}
          
        >
          {isLiked? "❤️" : "🤍 "}
        </button>
        
     
        <div className="like-count">
          Liked by <span className="count-number">{currentLikes}</span> people and 69 others.
        </div>
      </div>
    </div>
      
    </div>
  )
}

export default ImageComponent
