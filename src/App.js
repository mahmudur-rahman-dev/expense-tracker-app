import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    { title: "Car Insurance", price: 34, date: new Date("2014", "7", "15") },
    { title: "House Insurance", price: 40, date: new Date("2014", "7", "15") },
    { title: "Health Insurance", price: 50, date: new Date("2014", "7", "15") },
  ];

  const addExpenseHandler = expense => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
