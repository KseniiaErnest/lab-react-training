import React, { useState } from "react";

export default function ClickablePicture({img, imgClicked}) {

  // Set the initial value of click to false
  const [click, setClick] = useState(() => false);


  // Function to toggle between clicks
  const togglePicture = () => {
    setClick(prevClick => !prevClick)
  }

  /*By using the fucntional update form of setClick,
   I can access the previous value of click as prevClick. 
   This ensures that the state update is based on the previous value
   and avoids any potential issues with stale state values.
    */


  
  return (
    <div>
      <img src={click ? imgClicked : img} alt="student" onClick={togglePicture} />
    </div>
  )

  // Conditionally rendering image based on the current value of the click state.
}