import React from "react";
import "./FaceRecognition.css"

const FaceRecognition = ({imageUrl, box}) => {
    if (imageUrl) {
        return (
        <div className="center ma" >
            <div className="absolute mt2">
                <img id= "inputimage" className="br4 ba bw2"src={imageUrl} alt="Image Not Found!" width='400px' height='auto' />
                <div className="bounding-box" style = {{top:box.topRow , right:box.rightCol , bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
            
        </div>
        ) 
    } else {
        return null
    }
    
    
}


export default FaceRecognition;

 