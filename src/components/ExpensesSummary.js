import React from "react";
import numeral from "numeral";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    const expenseWord = expenseCount === 1 ? "expense" : "expenses";
    const formattedExpenses = numeral(expensesTotal / 100).format("$0,0.00");

    return (
        <div>
            <div>
                <h1>
                    <span> {expenseCount} </span>
                    {expenseWord} totalling
          <span> {formattedExpenses} </span>
                </h1>
                <div>
                    <Link to="/create">
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
