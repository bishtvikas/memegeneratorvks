import React from "react";
import "../Playground.css";
import PlaygroundCount from "./PlaygroundCount";



function Playground() {

  // --------------------------------------------------------------
// challenge 4 : passing state as prop

    const [count, setCount] = React.useState(0)
    console.log(0)
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
 
   // --------------------------------------------------------------
// challenge 4 : passing state as prop 

  // -------------------------------------------------------------- 

    return(
      <>
       <div className="counter">
                <button className="counter--minus" onClick={subtract}>–</button>
                <PlaygroundCount 
                number = {count}
                />
                <button className="counter--plus" onClick={add}>+</button>
            </div>
      </>
    )
}



  // --------------------------------------------------------------

  // --------------------------------------------------------------
// challenge 3 : change the state back and forth
// const [isGoingOut , setIsGoingOut] = React.useState(true);
// let myAnswer;

// function handleClick(){
//   setIsGoingOut(function(prevState){
//      return prevState === true ? false : true;
//   })
  
// }
  // --------------------------------------------------------------

    
  



  /**--------------------------------------------------------------
   * challenge 2: change the number when pressed + and - 
   
  // const [trackCount, setTrackCount] = React.useState(0);
  //  console.log(trackCount);

  // function handleMinusClick() {
    //always use callback function as parameter in useState function,
    //the old value of the useState method will be passed inside the callback function automatically.
  //   setTrackCount(function (prevCount ) {
  //     return prevCount  - 1;
  //   });
  // }
  // function handlePlusClick() {
  //   setTrackCount(function (prevCount ) {
  //     return prevCount  + 1;
  //   });
  // }--------------------------------------------------------------
  
//  --------------------------------------------------------------
        challenge 1: change the greeting according to the time 
  //     const date = new Date();
  //     const hrs = date.getHours();
  //     const min = date.getMinutes();
  //      let greeting;

  //     let time = `${hrs}:${min}`;
  //     // console.log(`${hrs}:${min}`);
  //     // console.log(typeof(time));
  //     if(time >= "4:00" && time < "11:59" )
  //     {
  //         greeting = "Good Morning";

  //     }

  //     else if(time >= '12:00' && time < '16:59'){
  //         greeting = "Good Afternoon";
  //     }
  //     else if(time >= '17:00' && time < '19:59'){
  //         greeting = "Good Evening";
  //     }
  //     else
  //         greeting = "Good Night";
--------------------------------------------------------------
  */
   




export default Playground;


// challenge 1: change the greeting according to the time
// <h1>Hello {greeting}</h1>
//      <h1>The time is {hrs}hrs:{min}min: </h1>
//      <h1>{`${greeting} Bob`}</h1>  


 
//        challenge 2: change the number when pressed + and - 
      
//       <div className="counter">
//         <button className="counter--minus" onClick={handleMinusClick}>
//           –
//         </button>
//         <div className="counter--count">
//           <h1>{trackCount}</h1>
//         </div>
//         <button className="counter--plus" onClick={handlePlusClick}>
//           +
//         </button>
//       </div> 
      
 
//  challenge 3: change the state back and forth 
//   <div className="state">
//             <h1 className="state--title">Do I feel like going out tonight?</h1>
//             <div className="state--value" onClick={handleClick}>
//                 <h1>{myAnswer = isGoingOut === true ? "Yes" : "No"}</h1>
//             </div>
//         </div>   