import { useState } from "react";
import "./ExpenseDesc.css";

const ExpenseDesc = (props) => {
  //
  //useState returns an array of two elements
  //
  const [title, setTitle] = useState(props.title);

  const clickHandler = (e) => {
    setTitle("Updated");
    console.log(title);
  };

  return (
    <div className="expense-item__description">
      <h2>{title}</h2>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default ExpenseDesc;
