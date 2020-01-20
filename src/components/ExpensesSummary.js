import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { firebase } from "../firebase/firebase";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpenses = numeral(expensesTotal / 100).format("$0,0.00");
  const user = firebase.auth().currentUser;

  return (
    <div className="col-md-5">
      <div className="mt-md-4">
        <div>
          <span className="text-white-50 ml-1">
            Welcome {user.length !== "" ? user.displayName : user.email}
          </span>
        </div>
        <h2 className="text-white font-weight-normal mb-4 mt-3 hero-title">
          <span> You have {expenseCount} </span>
          {expenseWord} totalling
          <span> {formattedExpenses} </span>
        </h2>
        <p className="mb-4 font-16 text-white-50">
          Track your expenses and to create financial awareness. If you don’t
          know where your money goes or how you spend it, you won’t know what
          habits you can change in order to make your money work for you.
        </p>
        <div>
          <Link to="/create" className="btn btn_success">
            Create Expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapState = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapState)(ExpensesSummary);
