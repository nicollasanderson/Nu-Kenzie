import { useState } from "react";
import "./style.css";

function Form({ listTransactions, setListTransactions }) {
  const [value, setValue] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("entrada");

  function addToList() {
    const newItem = {
      description,
      type,
      value: Number(value),
    };
    setListTransactions([...listTransactions, newItem]);
  }

  return (
    <div className="divForm">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="description">Descrição</label>
        <input
          type="text"
          id="description"
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        />

        <p className="descEx">Ex: Compra de roupas</p>

        <div className="divValueType">
          <div className="divInputs">
            <label htmlFor="value">Valor</label>
            <input
              type="text"
              id="value"
              placeholder="R$"
              onChange={(event) => setValue(event.target.value)}
            />
          </div>

          <div className="divInputs">
            <label htmlFor="select">Tipo de valor</label>
            <select id="select" onChange={(e) => setType(e.target.value)}>
              <option value="entrada">Entrada</option>
              <option value="saída">Despesas</option>
            </select>
          </div>
        </div>

        <button className="buttonSend" onClick={addToList}>
          Inserir valor
        </button>
      </form>
    </div>
  );
}

export default Form;
