import Form from "../Form";
import TotalMoney from "../TotalMoney";
import List from "../List";
import Logo from "../../img/NuKenzie.svg";

function ListItemsPage({
  listTransactions,
  setListTransactions,
  handleItem,
  setPage,
  filtro,
  filterItens,
}) {
  return (
    <div className="App">
      <header className="App-header">
        <div className="headerContainer">
          <img src={Logo} alt="Logo do site" />
          <button onClick={() => setPage("Welcome")}>Inicio</button>
        </div>
      </header>
      <main>
        <div className="columnForm">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="columnList"></div>
        <List
          listTransactions={listTransactions}
          handleItem={handleItem}
          filtro={filtro}
          filterItens={filterItens}
        />
      </main>
    </div>
  );
}

export default ListItemsPage;
