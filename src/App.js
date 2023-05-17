import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";

function App() {
  const expenses = [
    {title: 'Car Insurance', price: 34, date: new Date('2014', '7', '15')},
    {title: 'House Insurance', price: 40, date: new Date('2014', '7', '15')},
    {title: 'Health Insurance', price: 50, date: new Date('2014', '7', '15')}

  ];

  return (
    <div>
      <NewExpense expenses={expenses}/>
    </div>
  );
}

export default App;
