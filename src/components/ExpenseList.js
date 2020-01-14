import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";


export const ExpenseList = props => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show-for-mobile">Expenses</div>
                <div className="show-for-desktop">Expense</div>
                <div className="show-for-desktop">Amount</div>
            </div>
            <div className="list-body">
                {props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>There are no expenses</span>
                    </div>
                ) : (
                        props.expenses.map(expense => {
                            return <p>{expense.id}</p>;
                        })
                    )}
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
