import "./style.css";

function Card({ element, handleItem }) {
  return (
    <>
      {element.type === "entrada" ? (
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
      ) : (
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
      )}
    </>
  );
}

export default Card;
