import "./style.css";

function Card({ element, handleItem }) {
  if (element.type === "entrada") {
    return (
      <div className="divCardMain borderGreen">
        <div className="cardInfos">
          <h3>{element.description}</h3>
          <p>{element.type}</p>
        </div>
        <div className="cardValueButton">
          <p>R$ {element.value}</p>
          <button onClick={() => handleItem(element)}></button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="divCardMain">
        <div className="cardInfos">
          <h3>{element.description}</h3>
          <p>{element.type}</p>
        </div>
        <div className="cardValueButton">
          <p>R$ {element.value}</p>
          <button onClick={() => handleItem(element)}></button>
        </div>
      </div>
    );
  }
}

export default Card;
