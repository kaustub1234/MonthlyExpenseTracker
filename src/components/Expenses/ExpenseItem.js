import React from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const deleteItem = () => {
    console.log("done ExpenseItem.js");
    props.onDeleteItem(props.Id);
  }
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={props.date} />
        <div className='expense-item__description'>
          <h2>{props.title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
          <button className="deleteItem" type='submit' onClick={deleteItem}>Delete</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;