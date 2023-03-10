import React,{ useState } from "react";
import Expanseitem from "./Expanseitem";
import Card from "../UI/Card";
import ExpensesFilter from './ExpansesFilter';
import './Expenses.css';


function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2023');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {props.items.map((expanse) => (
          <Expanseitem
            title={expanse.title}
            amount={expanse.amount}
            date={expanse.date}
          />
        
      ))}
      </Card>
    </div>
  );
}
export default Expenses;
