import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ data, setId }) => {
  const addId = (id) => {
    localStorage.setItem("cadrElem", JSON.stringify(data[id]));
    setId(id);
  };

  return data.map((el) => (
    <Link
      to={`/id:${el.id}`}
      key={el.id}
      className="card"
      onClick={() => addId(el.id)}
    >
      <div className="card__content">
        <div className="title">{el.name}</div>
        <div className="card__image">
          <img src={el.images[0]} alt="картинка" />
        </div>
      </div>
    </Link>
  ));
};

export default Card;
