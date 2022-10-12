import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  //Create a handler function which will receive
  //input from the child component
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);

    setShowForm(false);
  };

  const showExpenseFormHandler = () => {
    setShowForm(true);
  };

  const hideExpenseFormHandler = () => {
    setShowForm(false);
  };
  //Pass the handler function as a value to the prop
  //declared in the child component instance
  return (
    <div className='new-expense'>
      {!showForm && (
        <button onClick={showExpenseFormHandler}>Add New Expense</button>
      )}
      {showForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={hideExpenseFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
