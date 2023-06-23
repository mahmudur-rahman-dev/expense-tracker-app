import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddExpenseOption, setAddExpenseOption] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setAddExpenseOption(false);
  };

  const addNewExpenseClickHandler = () => {
    setAddExpenseOption(true);
  };

  const cancelClickHandler = () => {
    setAddExpenseOption(false);
  };

  return (
    <div className="new-expense">
      {isAddExpenseOption ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelClick={cancelClickHandler}
        />
      ) : (
        <button onClick={addNewExpenseClickHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
