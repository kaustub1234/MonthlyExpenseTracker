import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }
  // const deleteItem = (key) => {
  //   console.log("done ExpenseList.js");
  //   props.onDeleteExpenses(key);
  // }
  return (
    <ul className='expenses-list'>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          Id={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          onDeleteItem={props.onDeleteExpenses}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;