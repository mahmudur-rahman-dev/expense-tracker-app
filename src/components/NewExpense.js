import ExpenseItem from "./ExpenseItem";
import "./NewExpense.css";

export default function (props) {
    const {expenses} = props;
  return (
    <div>
      {expenses.map((expense, index) => (
        <ExpenseItem key={index} title={expense.title} price={expense.price} date={expense.date} />
      ))}
    </div>
  );
}
