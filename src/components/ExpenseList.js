import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => {
    return (
        <div>
            <div>
                <div>Expenses</div>
                <div>Expense</div>
                <div>Amount</div>
            </div>
            <div>
                {props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>There are no expenses</span>
                    </div>
                ) : (
                        props.expenses.map(expense => {
                            return <ExpenseListItem {...expense} key={expense.id} />;
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
