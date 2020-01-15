import React, { Component } from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

class ExpenseForm extends Component {
    state = {
        description: this.props.expense ? this.props.expense.description : "",
        note: this.props.expense ? this.props.expense.note : "",
        amount: this.props.expense
            ? (this.props.expense.amount / 100).toString()
            : "",
        createdAt: this.props.expense
            ? moment(this.props.expense.createdAt)
            : moment(),
        calendarFocused: false
    };

    onAmountChange = value => {
        if (!value || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState({ amount: value });
        }
    };

    onSubmit = e => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState({ error: "Please provide description and amount" });
        } else {
            this.setState({ error: "" });
            this.props.onSubmited({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: moment(this.state.createdAt).valueOf()
            });
        }
    };

    render() {
        return (
            <form onSubmit={e => this.onSubmit(e)}>
                {this.state.error && <p>{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="Description"
                    value={this.state.description}
                    onChange={({ target: { value } }) => {
                        this.setState({ description: value });
                    }}
                    autoFocus
                />

                <input
                    type="text"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={({ target: { value } }) => this.onAmountChange(value)}
                />

                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={createdAt => {
                        if (createdAt) {
                            this.setState({ createdAt });
                        }
                    }}
                    focused={this.state.calendarFocused}
                    onFocusChange={({ focused }) =>
                        this.setState({ calendarFocused: focused })
                    }
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />

                <textarea
                    placeholder="Add note"
                    value={this.state.note}
                    onChange={({ target: { value } }) => {
                        this.setState({ note: value });
                    }}
                ></textarea>

                <button>Add expense</button>
            </form>
        );
    }
}

export default ExpenseForm;
