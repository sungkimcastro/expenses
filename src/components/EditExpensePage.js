import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense, startRemoveExpense } from "./../actions/expenses";

const EditExpensePage = props => {
    return (
        <React.Fragment>
            <div>
                <div>
                    <h1>Edit Expense</h1>
                </div>
            </div>

            <div>
                <ExpenseForm
                    expense={props.expenses}
                    onSubmited={expense => {
                        props.dispatch(startEditExpense(props.expenses.id, expense));
                        props.history.push("/");
                    }}
                />
                <button
                    onClick={() => {
                        props.dispatch(startRemoveExpense({ id: props.expenses.id }));
                        props.history.push("/");
                    }}
                >
                    Remove expense
                </button>
            </div>
        </React.Fragment>
    );
};

const mapToState = (state, props) => {
    return {
        expenses: state.expenses.find(({ id }) => id === props.match.params.id)
    };
};

export default connect(mapToState)(EditExpensePage);
