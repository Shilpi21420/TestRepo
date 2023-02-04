
import "./Expenseitems.css";
import "./ExpanseDate";
import ExpanseDate from "./ExpanseDate";

function Expanseitem(props) {
  return (
    <div className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3>{props.location}</h3>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}
export default Expanseitem;
