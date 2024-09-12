import "./UserCard.css"
import { IoMdCloseCircle } from "react-icons/io";

export const UserCard = ({ image, name, role, bgColor, onDelete }) => {
  return(
    <div className="person">
      <IoMdCloseCircle size={25} className="delete" onClick={onDelete} />
      <div className="person-header" style={{ "--person-header-bg-color": bgColor }}>
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