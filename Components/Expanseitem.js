import React from "react";
import "./Expenseitems.css";
import "./ExpanseDate";
import Card from "./Card";
import ExpanseDate from "./ExpanseDate";
import { useState } from "react";

function Expanseitem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickedhandler = () => {
    setTitle("Updated");
  };
  const clickDelete = () => {
    setAmount("100$");
  };
  return (
    <Card className="expense-item">
      <ExpanseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <h3>{props.location}</h3>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickedhandler}>Change Title</button>
      <button onClick={clickDelete}>Delete Expense</button>
    </Card>
  );
}
export default Expanseitem;
