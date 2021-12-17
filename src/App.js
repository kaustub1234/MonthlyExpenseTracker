import React, { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const DeleteExpenseHandler = (key) => {
    console.log("done App.js");
    
    setExpenses(prevExpenses =>{
      const newExpense = prevExpenses.filter( (expense) => expense.id !== key )

      return newExpense;
    })
  }

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} onDelete={DeleteExpenseHandler} />
    </div>
  );
};

export default App;