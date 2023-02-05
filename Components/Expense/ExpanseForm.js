import React from "react";
import './ExpanseForm.css';

const ExpanseForm = () =>{

    const titlechange = (event) =>{
        console.log(event.target.value);
    }

     const amountChange = (event) =>{
        console.log(event.target.value);

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
            <input type='date' min="2019-01-01" max="2025-12-31"  />
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
