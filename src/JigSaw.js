import React from 'react';

const JigSaw = (prop) => {
    return (
    <div className="JigSaw container-fluid p-0">
        { prop.order === 1 && 
            <div className="row no-gutters">
                <div className="col-lg-6 order-lg-1 text-white showcase-img" 
                style={{backgroundImage: `url('${prop.img}')` }}></div>

                <div className="col-lg-6 order-lg-2 my-auto showcase-text">
                    <h2>{prop.title}</h2>
                    <p className="lead mb-0">{prop.caption}</p>
                </div>
            </div>
        }

        { prop.order === 2 && 

            <div className="row no-gutters">
                <div className="col-lg-6 order-lg-2 text-white showcase-img" 
                style={{backgroundImage: `url('${prop.img}')` }}></div>

                <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                    <h2>{prop.title}</h2>
                    <p className="lead mb-0">{prop.caption}</p>
                </div>
            </div>
        }
    { prop.order === 3 && 
            <div className="row no-gutters">
                <div className="col-lg-6 order-lg-1 text-white showcase-img" 
                style={{backgroundImage: `url('${prop.img}')` }}></div>

                <div className="col-lg-6 order-lg-2 my-auto showcase-text">
                    <h2>{prop.title}</h2>
                    <p className="lead mb-0">{prop.caption}</p>
                </div>
            </div>
        }

        
    </div>
    
    
    )
}

export default JigSaw;































