import "./style.css";
import Card from "../Card";
import Frame from "../../img/Frame.svg";

function List({ listTransactions, handleItem, filtro, filterItens }) {
  return (
    <div className="divList">
      <div className="buttonsTopList">
        <p>Resumo financeiro</p>
        <div className="buttonsFilter">
          <button onClick={() => filterItens("all")}>Todos</button>
          <button onClick={() => filterItens("entrada")}>Entradas</button>
          <button onClick={() => filterItens("saída")}>Despesas</button>
        </div>
      </div>

      {listTransactions.length === 0 ? (
        <>
          <h3>Você ainda não possui nenhum lançamento</h3>
          <img className="empty" src={Frame} alt="" />
          <img className="empty" src={Frame} alt="" />
          <img className="empty" src={Frame} alt="" />
        </>
      ) : filtro.length > 0 ? (
        <div>
          {filtro.map((element, index) => {
            return (
              <Card key={index} element={element} handleItem={handleItem} />
            );
          })}
        </div>
      ) : (
        <div>
          {listTransactions.map((element, index) => {
            return (
              <Card key={index} element={element} handleItem={handleItem} />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default List;
