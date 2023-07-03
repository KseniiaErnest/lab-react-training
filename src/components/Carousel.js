import React, { useState } from "react";

export default function Carousel( {images} ) {

  // 'currentImageIndex' keeps the track of currently displayed images
  const [currentImageIndex, setImageIndex] = useState(() => 0);

  const handleLeftClick = () => {
    setImageIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex -1 ));
  };
  // Checking the edge cases when dispalyed image is very first then display the last one

  const handleRightClick = () => {
    setImageIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1 ));
  }
// Checking the edge case when displayed image is very last one, then display the first one


  return (
<div>
  <img src={images[currentImageIndex]} alt="a person" />
  <button onClick={handleLeftClick}>Left</button>
  <button onClick={handleRightClick}>Right</button>
</div>
  )
}