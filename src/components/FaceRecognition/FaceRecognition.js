import React from "react";

const FaceRecognition = ({imageUrl}) => {
    if (imageUrl) {
        return (
        <div className="center ma" >
            <img className="br4 ba bw2"src={imageUrl} alt="image" width='400px' height='auto' />
        </div>
        ) 
    } else {
        return null
    }
    
    
}


export default FaceRecognition;

 