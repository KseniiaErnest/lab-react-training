
function IdCard({lastName, firstName, gender, height, birth, picture}) {
  const formattedBirth = birth.toLocaleDateString();

  return (
    <div className="idcard-container">
    <div className="image-box">
      <img src={picture} alt=""></img>
    </div>
<div className="profile-box">
  <p><span>First name:</span> {firstName} </p>
  <p><span>Last name:</span> {lastName} </p>
  <p><span>Gender:</span> {gender} </p>
  <p><span>Height:</span> {height} </p>
  <p><span>Birth:</span> {formattedBirth} </p>
</div>

</div>
  )

}

export default IdCard;