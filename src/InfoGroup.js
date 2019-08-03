import React from 'react';


export const Info = (prop) => {
    return(
      <div className="Info" id="info">
        <i className={prop.iconClass}></i>
        <h3>{prop.title}</h3>
        <p>{prop.caption}</p>
      </div>
    )
  }
  
  export const InfoGroup = (prop) => {
    return (
        
      <div className="InfoGroup container-fluid">
          {prop.title && <h2>{prop.title}</h2>}
        <div className="container">
            {prop.children}
        </div>
      </div>
    )
  }

  export default InfoGroup;