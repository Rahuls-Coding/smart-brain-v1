import React from 'react';
import brain from "./brain.svg"


const Logo = () => {
    return (
      <div className="ma4 mt1">
          <div className=" br2 shadow-2" style={{height: 150, width: 150}}>
              <div className="pa3">
                <img style={{paddingTop: '3px'}} alt="" src={brain} />
              </div>
                
          </div>
      </div>
    );
  };


export default Logo