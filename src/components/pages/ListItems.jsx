import Form from "../Form";
import TotalMoney from "../TotalMoney";
import List from "../List";
import Logo from "../../img/NuKenzie.svg";

function ListItemsPage({
  listTransactions,
  setListTransactions,
  handleItem,
  setPage,
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
        <List listTransactions={listTransactions} handleItem={handleItem} />
      </main>
    </div>
  );
}

export default ListItemsPage;
