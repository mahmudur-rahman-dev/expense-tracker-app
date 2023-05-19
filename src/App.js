import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", price: 34, date: new Date("2014", "7", "15") },
    { title: "House Insurance", price: 40, date: new Date("2014", "7", "15") },
    { title: "Health Insurance", price: 50, date: new Date("2014", "7", "15") },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
