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
                <div>
                    <div>
                        <h1>Add Expense </h1>
                    </div>
                </div>
                <div >
                    <ExpenseForm onSubmited={this.onSubmited} />
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
