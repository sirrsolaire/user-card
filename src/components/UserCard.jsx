function UserCard({ gender, firstName, lastName, country, city, image }) {
  return (
    <div className="user-container">
      <img src={image} alt={firstName} />
      <div className="detail-wrapper">
        <h4>
          Name: {firstName} {lastName}
        </h4>
        <h4>Gender: {gender}</h4>
        <h4>
          City: {city} | {country}
        </h4>
      </div>
    </div>
  );
}

export default UserCard;
