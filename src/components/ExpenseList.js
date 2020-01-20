import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => {
  return (
    <div className="py-5">
      <div className="container card">
        <div className="card-body">
          <h4 className="header-title mb-4">Expenses</h4>
          {props.expenses.length === 0 ? (
            <p className="text-center">There are no expenses</p>
          ) : (
            <table className="table table-centered table-nowrap table-hover mb-0">
              <tbody>
                {props.expenses.map(expense => {
                  return <ExpenseListItem {...expense} key={expense.id} />;
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
