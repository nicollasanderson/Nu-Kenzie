import "./style.css";
import Card from "../Card";
import Frame from "../../img/Frame.svg";

function List({ listTransactions, handleItem }) {
  if (listTransactions.length <= 0) {
    return (
      <div className="divList">
        <div className="buttonsTopList">
          <p>Resumo financeiro</p>
          <div className="buttonsFilter">
            <button>Todos</button>
            <button>Entradas</button>
            <button>Despesas</button>
          </div>
        </div>

        <h3>Você ainda não possui nenhum lançamento</h3>
        <img className="empty" src={Frame} alt="" />
        <img className="empty" src={Frame} alt="" />
        <img className="empty" src={Frame} alt="" />
      </div>
    );
  } else {
    return (
      <div className="divList">
        <div className="buttonsTopList">
          <p>Resumo financeiro</p>
          <div className="buttonsFilter">
            <button>Todos</button>
            <button>Entradas</button>
            <button>Despesas</button>
          </div>
        </div>
        {listTransactions.map((element, index) => {
          return <Card key={index} element={element} handleItem={handleItem} />;
        })}
      </div>
    );
  }
}

export default List;
