import React, { useState } from "react";
import './ExpanseForm.css';

const ExpanseForm = (props) =>{
    const [enttitle , enteredtitle] = useState(''); 
    const [entamount, enteredAmount] = useState('');
    const [entdate, enteredDate] = useState('');

    const titlechange = (event) =>{
      enteredtitle(event.target.value);
    }
    const amountChange = (event) =>{
      enteredAmount(event.target.value);
   }
   const dateChange = (event) =>{
    enteredDate(event.target.value);
    }

     const submitbutton = (event) =>{
      event.preventDefault();
      const expenseDate = {
        title : enttitle,
        amount : entamount,
        date : new Date(entdate)
      };

      props.onSaveExpenseData(expenseDate);
      enteredtitle('');
      enteredAmount('');
      enteredDate('');

     }


return (
    <>
      <form onSubmit={submitbutton}> 
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type='text' value = {enttitle} onChange={titlechange} />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' value={entamount} onChange={amountChange} />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2025-12-31" value={entdate} onChange={dateChange} />
          </div>
        </div>

        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
      </form>
    </>
);

}
export default ExpanseForm;
