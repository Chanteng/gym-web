import React from 'react'

function Featurebox(props) {
    return (
        <div className="a-box">
           <div className="a-b-img">
         <img src={props.image} alt="" />
         </div> 
         <div className="a-b-text">
            <h2>  {props.title}  </h2>
            <p>Best ofthe best, Is the Best and Best</p>
         </div>
        </div>
    )
}

export default Featurebox
