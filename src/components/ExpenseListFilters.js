import React, { Component } from "react";
import { DateRangePicker } from "react-dates";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  render() {
    return (
      <div className="col-md-5 offset-md-2">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="text-white-50">Search expenses</label>
              <input
                type="text"
                placeholder="Type an expense"
                className="form-control"
                value={this.props.filters.text}
                onChange={({ target: { value } }) => {
                  this.props.dispatch(setTextFilter(value));
                }}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-group">
              <label className="text-white-50">Sort expense by</label>
              <select
                className="custom-select"
                value={this.props.filters.sortBy}
                onChange={e => {
                  if (e.target.value === "date") {
                    this.props.dispatch(sortByDate());
                  } else if (e.target.value === "amount") {
                    this.props.dispatch(sortByAmount());
                  }
                }}
              >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
              </select>
            </div>
          </div>

          <div className="form-group col-lg-10">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={calendarFocused =>
                this.setState({ calendarFocused })
              }
              showClearDates={true}
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
