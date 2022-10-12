import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //Handling States individually
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //Title Input Handler
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  ///Amount Input Handler
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  //Date Input Handler
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  ///Submit Form
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    //Clearing the form inputs
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            placeholder='Expense Title'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label htmlFor='amount'>Amount</label>
          <input
            type='number'
            min={0.01}
            step={0.01}
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label htmlFor='date'>Date</label>
          <input
            type='date'
            min={'2018-01-01'}
            max={'2022-12-31'}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;

////Using One state to handle different states
// declared before the handler
// const [userInput, setUserInput] = useState({
//   enteredTitle: "",
//   enteredAmount: "",
//   enteredDate: "",
// });

//declared in the handler
// setUserInput((prevState) => {
//   return { ...prevState, enteredAmount: event.target.value };
// });
