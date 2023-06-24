import { useState } from "react";
import Expenses from "./components/Expense/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  { id: '1s', title: "Car Insurance", price: 34, date: new Date("2021", "7", "15") },
  { id: '2s', title: "House Insurance", price: 40, date: new Date("2022", "2", "50") },
  { id: '3s', title: "Health Insurance", price: 50, date: new Date("2020", "3", "60") },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses =>
        [expense, ...prevExpenses]
      );
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
