import "./UserCard.css"
import { IoMdCloseCircle, IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

export const UserCard = ({ id, image, name, role, bgColor, fav, onDelete, onFav }) => {
  const handlerOnFav = () => onFav(id)

  const favStyles = {
    size: 25,
    onClick: handlerOnFav
  }

  return(
    <div className="person">
      <IoMdCloseCircle size={25} className="delete" onClick={() => onDelete(id)} />
      <div className="person-header" style={{ "--person-header-bg-color": bgColor }}>
        <img src={image} alt={name}></img>
      </div>
      <div className="person-footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
        <div className="fav-heart">
          {fav 
            ? <IoMdHeart {...favStyles} color="#ff0000" /> 
            : <IoMdHeartEmpty {...favStyles} />
          }
        </div>
      </div>
    </div>
  );
}

export default UserCard;