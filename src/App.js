import Expenses from "./Components/Expenses";
import NewExpense from "./Components/Expense/NewExpense";

function App() {
  const addExpanseHandler = expense =>{
    console.log('In app');
    console.log(expense);
  }
  return (
  <>
  <NewExpense  onAddExpanse={addExpanseHandler}/>
  <Expenses />
  
  </>
  );
}
export default App;
