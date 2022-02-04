import "./App.css";
import { useState } from "react";
import ListItemsPage from "./components/pages/ListItems";
import Welcome from "./components/pages/Welcome";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  console.log(listTransactions);
  const [page, setPage] = useState("Welcome");
  const [filtro, setFiltro] = useState([]);

  function filterItens(tipo) {
    const filtered = listTransactions.filter(
      (element) => element.type === tipo
    );
    setFiltro(filtered);
    tipo === "all" && setFiltro([]);
  }

  function handleItem(item) {
    const filtered = listTransactions.filter((element) => element !== item);
    const fitleredType = filtro.filter((element) => element !== item);
    setListTransactions(filtered);
    setFiltro(fitleredType);
  }

  if (page === "Welcome") {
    return <Welcome setPage={setPage} />;
  } else {
    return (
      <div className="App">
        <ListItemsPage
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          handleItem={handleItem}
          setPage={setPage}
          filtro={filtro}
          filterItens={filterItens}
        />
      </div>
    );
  }
}

export default App;
