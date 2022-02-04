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
  function handleItem(item) {
    const filtered = listTransactions.filter((element) => element !== item);
    setListTransactions(filtered);
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
        />
      </div>
    );
  }

  // return (

  //   // <div className="App">
  //   //   <header className="App-header">
  //   //     <div className="headerContainer">
  //   //       <img src={Logo} />
  //   //       <button>Inicio</button>
  //   //     </div>
  //   //   </header>
  //   //   <main>
  //   //     <div className="columnForm">
  //   //       <Form
  //   //         listTransactions={listTransactions}
  //   //         setListTransactions={setListTransactions}
  //   //       />
  //   //       <TotalMoney listTransactions={listTransactions} />
  //   //     </div>
  //   //     <div className="columnList"></div>
  //   //     <List listTransactions={listTransactions} handleItem={handleItem} />
  //   //   </main>
  //   // </div>
  // );
}

export default App;
