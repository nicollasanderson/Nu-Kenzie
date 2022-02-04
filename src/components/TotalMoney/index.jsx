import "./style.css";

function TotalMoney({ listTransactions }) {
  if (listTransactions.length > 0) {
    const filtered = listTransactions.map((e) => e.value);
    return (
      <div className="divMain">
        <p>Valor total: </p>
        <p className="valor">$ {filtered.reduce((a, b) => a + b)}</p>
      </div>
    );
  }
  return <></>;
}

export default TotalMoney;
