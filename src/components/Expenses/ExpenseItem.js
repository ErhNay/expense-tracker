import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import ExpenseDesc from "./ExpenseDesc";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDesc title={props.title} amount={props.amount} />
    </Card>
  );
};

export default ExpenseItem;
