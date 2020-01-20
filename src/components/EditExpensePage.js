import React from "react";
import { connect } from "react-redux";
import { startEditExpense, startRemoveExpense } from "./../actions/expenses";
import ExpenseForm from "./ExpenseForm";

const EditExpensePage = props => {
  return (
    <div className="hero-section-edit-expense">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h1 className="text-white font-weight-normal mb-4 mt-3 hero-title">
              Edit Expense
            </h1>
            <button
              className="btn btn-warning"
              onClick={() => {
                props.dispatch(startRemoveExpense({ id: props.expenses.id }));
                props.history.push("/");
              }}
            >
              Delete expense
            </button>
          </div>
          <div className="col-md-7">
            <ExpenseForm
              expense={props.expenses}
              onSubmited={expense => {
                props.dispatch(startEditExpense(props.expenses.id, expense));
                props.history.push("/");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapToState = (state, props) => {
  return {
    expenses: state.expenses.find(({ id }) => id === props.match.params.id)
  };
};

export default connect(mapToState)(EditExpensePage);
