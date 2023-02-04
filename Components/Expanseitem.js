import "./Expenseitems.css";
import "./ExpanseDate";
import Card from "./Card";
import ExpanseDate from "./ExpanseDate";

function Expanseitem(props) {
  const clickedhandler = () => {
    console.log("Clicked");
  };
  const clickDelete = () => {
    console.log("Clicked second button");
  };
  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3>{props.location}</h3>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickedhandler}>Change Title</button>
      <button onClick={clickDelete}>Delete Expense</button>
    </Card>
  );
}
export default Expanseitem;
