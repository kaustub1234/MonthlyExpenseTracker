import React, { useState } from "react";
import ErrorModal from "./ErrorModal";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [deleteModal, setDeleteModal] = useState(null);

  const confirmHandler = () => {
    deleteItemProperty();
    setDeleteModal(null);
  };

  const cancellationHandler = () => {
    setDeleteModal(null);

  }

  const deleteItemProperty = () => {
    console.log("done ExpenseItem.js");
    props.onDeleteItem(props.Id);
  };


  const deleteItem = () => {
    if (deleteModal == null) {
      setDeleteModal({
        message: "Do you want to delete this expense?",
        title: "Delete expense",
        id: props.Id,
      });
      return;
    }
  };


  return (
    <li>
      {deleteModal && (
        <ErrorModal
          title={deleteModal.title}
          message={deleteModal.message}
          onConfirm={confirmHandler}
          onCancel={cancellationHandler}
        />
      )}
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button className="deleteItem" type="submit" onClick={deleteItem}>
            Delete
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
