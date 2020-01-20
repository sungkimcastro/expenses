import React, { Component } from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "./../actions/expenses";

export class AddExpensePage extends Component {
  onSubmited = expense => {
    this.props.startAddExpense(expense);

    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <div className="hero-section-add-expense">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                <h1 className="text-white font-weight-normal mb-4 mt-3 hero-title">
                  Add Expense
                </h1>
              </div>
              <div className="col-md-7">
                <ExpenseForm onSubmited={this.onSubmited} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapToDispatch = dispatch => {
  return {
    startAddExpense: expense => dispatch(startAddExpense(expense))
  };
};

export default connect(undefined, mapToDispatch)(AddExpensePage);
