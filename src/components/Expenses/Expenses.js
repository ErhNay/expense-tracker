import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2019");
  const selectedYearHandler = (selectedYear) => {
    setFilterYear(selectedYear);

    console.log(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onSelectedYear={selectedYearHandler}
        />
        <ExpenseItem
          title={props.expenses[0]["title"]}
          amount={props.expenses[0]["amount"]}
          date={props.expenses[0]["date"]}
        />
        <ExpenseItem
          title={props.expenses[1]["title"]}
          amount={props.expenses[1]["amount"]}
          date={props.expenses[1]["date"]}
        />
        <ExpenseItem
          title={props.expenses[2]["title"]}
          amount={props.expenses[2]["amount"]}
          date={props.expenses[2]["date"]}
        />
        <ExpenseItem
          title={props.expenses[3]["title"]}
          amount={props.expenses[3]["amount"]}
          date={props.expenses[3]["date"]}
        />
      </Card>
    </div>
  );
};

export default Expenses;
