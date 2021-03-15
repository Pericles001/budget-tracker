import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const expenses = [
    { id: 12, name: "shopping", cost: 40 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
    { id: 15, name: "Transportation", cost: 500 },
    { id: 13, name: "Fuel", cost: 400 },
    { id: 14, name: "Child care", cost: 250 }
  ];

  return (
    <ul>
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
};

export default ExpenseList;
