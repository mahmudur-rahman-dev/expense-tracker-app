import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {title: 'Car Insurance', price: 34, date: new Date('2014', '7', '15')},
    {title: 'House Insurance', price: 40, date: new Date('2014', '7', '15')},
    {title: 'Health Insurance', price: 50, date: new Date('2014', '7', '15')}

  ];
  console.log(expenses[1]);
  return (
    <div>
      <ExpenseItem title={expenses[0].title} price={expenses[0].price} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} price={expenses[1].price} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} price={expenses[2].price} date={expenses[2].date}></ExpenseItem>
    </div>
  );
}

export default App;
