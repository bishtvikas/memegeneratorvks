import React from "react"


function PlaygroundCount(props){
    console.log(props.Number);
   return(
       <>
       
           <div className="counter--count">
                <h1>{props.number}</h1>
            </div>
       
       </>
   )
}

export default PlaygroundCount;