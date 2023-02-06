import React,{ useState } from "react";
import Expenses from "./Components/NewExpanses/Expenses";
import NewExpense from "./Components/Expense/NewExpense";

  const dummyexpanses = [
    {
      title: "Food",
      amount: 200,
      date: new Date(2022, 7, 14).toString().slice(0, 15),
      location: "Bihar"
    },
    {
      title: "Bill",
      amount: 500,
      date: new Date(2022, 7, 15).toString().slice(0, 15),
      location: "Jharkhand"
    },
    {
      title: "Roaming",
      amount: 250,
      date: new Date(2022, 8, 14).toString().slice(0, 15),
      location: "Delhi"
    },
    {
      title: "College",
      amount: 75000,
      date: new Date(2022, 8, 14).toString().slice(0, 15),
      location: "Banglore"
    }
  ];
function App() {

  const [expenses, setExpenses] = useState(dummyexpanses);
  const addExpanseHandler = expense =>{
   setExpenses(preExpanses =>{
    return [expense, ...preExpanses];

   });
  };
  return (
  <>
  <NewExpense  onAddExpanse= {addExpanseHandler}/>
  <Expenses items={expenses}/>
  
  </>
  );
}
export default App;
