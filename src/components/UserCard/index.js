import "./UserCard.css"

export const UserCard = ({ image, name, role }) => {
  return(
    <div className="person">
      <div className="header">
        <img src={image} alt={name}></img>
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h3>{role}</h3>
      </div>
    </div>
  );
}

export default UserCard;