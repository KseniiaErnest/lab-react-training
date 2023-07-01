
function Random( {min, max} ) {

  const randomInteger =  Math.floor(Math.random() * (max - min) + min);

  return (
    <div>
      <p>Random value between {min} and {max} = {randomInteger}</p>
    </div>
  )

}

export default Random;