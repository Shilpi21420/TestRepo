import "./Expenseitems.css";

function Expanseitem() {
  const expanseDate = new Date().toLocaleTimeString();
  const expanseTitle = "Car insuranse";
  const expansePrice = 2492;
  return (
    <>
      <div className="expense-item ">
        <div>{expanseDate}</div>
        <div className="expense-item__description">
          <h2>{expanseTitle} </h2>
          <div className="expense-item__price">{expansePrice}</div>
        </div>
      </div>
    </>
  );
}
export default Expanseitem;
