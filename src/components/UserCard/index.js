import "./UserCard.css"

export const UserCard = ({ image, name, role }) => {
  return(
    <div className="person">
      <div className="person-header">
        <img src={image} alt={name}></img>
      </div>
      <div className="person-footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}

export default UserCard;