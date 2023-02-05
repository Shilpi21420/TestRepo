import React, { useState } from "react";
import './ExpanseForm.css';

const ExpanseForm = () =>{
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


return (
    <>
      <form>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type='text' onChange={titlechange} />
          </div>

          <div className="new-expense__control">
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={amountChange} />
          </div>

          <div className="new-expense__control">
            <label>Date</label>
            <input type='date' min="2019-01-01" max="2025-12-31" onChange={dateChange} />
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
