import Rating from "./Rating"

export default function DriverCard({name, rating, img, car}) {

  return (
    <div className="driverCard-container">
      <div>
        <img className="image" src={img} alt={name} />
      </div>

      <div className="driverCard-profile-box">
        <h2>{name}</h2>
        <Rating>{rating}</Rating>
        <p>{car.model} - {car.licensePlate}</p>

      </div>
    </div>
  )
}