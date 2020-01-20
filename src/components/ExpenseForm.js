import React, { Component } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

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
        <div className="row">
          <div className="col-12">
            {this.state.error && (
              <p className="font-weight-bold text-danger">{this.state.error}</p>
            )}
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label className="text-white-50">Description</label>
              <input
                type="text"
                placeholder="Add a description"
                className="form-control"
                value={this.state.description}
                onChange={({ target: { value } }) => {
                  this.setState({ description: value });
                }}
                autoFocus
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label className="text-white-50">Amount</label>
              <input
                type="text"
                placeholder="Add the amount"
                className="form-control"
                value={this.state.amount}
                onChange={({ target: { value } }) => this.onAmountChange(value)}
              />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="form-group">
              <label className="text-white-50 d-block">Add a day</label>
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
            </div>
          </div>
        </div>

        <div className="row mt-1">
          <div className="col-lg-12">
            <div className="form-group">
              <label className="text-white-50">Add note</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Add a note"
                value={this.state.note}
                onChange={({ target: { value } }) => {
                  this.setState({ note: value });
                }}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="text-right col-lg-12">
            <button className="btn btn-block btn-outline-light py-4">
              Add expense
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default ExpenseForm;
