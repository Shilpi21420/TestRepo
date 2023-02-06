import React from 'react';
import './NewExpense.css';
import ExpanseForm from './ExpanseForm';

const NewEcpense =(props) =>{
    const saveExpenseDataandler = (enterExpenseData) =>{
        const expenseDate = {
            ...enterExpenseData,
            id: Math.random().toString()
        };
       props.onAddExpanse(expenseDate);

    };
return (
<div className='new-expense'>
    <ExpanseForm  onSaveExpenseData={saveExpenseDataandler} />
</div>

    
);
}
export default NewEcpense;
