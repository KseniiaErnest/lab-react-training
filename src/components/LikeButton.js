import React, { useState } from "react"


export default function LikeButton() {
  const [count, setCount] = useState(() => 0);

  // Add state to hold the current color index of the color array
  const [colorIndex, setColorIndex] = useState(() => 0);
  const colorArray = ['purple','blue','green','yellow','orange','red'];

  const countPlus = () => {
    setCount(prevCount => prevCount + 1);
    updateColorIndex();

  }

  const updateColorIndex = () => {
    if (colorIndex === colorArray.length - 1) {
      setColorIndex(0);
    } else (
      setColorIndex(prevIndex => prevIndex + 1)
    )
  }


  return (
    <button
     onClick={countPlus} style={{backgroundColor: colorArray[colorIndex] }}> {count} Likes</button>
  )
}