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
            <div>
                <div>
                    <div>
                        <input
                            type="text"
                            placeholder="Search expenses"
                            value={this.props.filters.text}
                            onChange={({ target: { value } }) => {
                                this.props.dispatch(setTextFilter(value));
                            }}
                        />
                    </div>
                    <div>
                        <select
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
                    <div>
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
