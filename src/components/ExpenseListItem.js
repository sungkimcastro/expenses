import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, note, createdAt }) => (
  <tr>
    <td>
      <Link to={`/edit/${id}`} className="text-body">
        <span className="text-muted font-13">Description</span>
        <h5 className="font-14 my-1 text-truncate">{description}</h5>
      </Link>
    </td>

    <td>
      <span className="text-muted font-13">Created</span>
      <br />
      <h5 className="font-14 mt-1 font-weight-normal">
        {moment(createdAt).format("MMMM Do YYYY")}
      </h5>
    </td>

    <td>
      <span className="text-muted font-13">Note</span>
      <h5 className="font-14 mt-1 font-weight-normal text-truncate">
        {note.length > 0 ? (
          note
        ) : (
          <span className="badge badge_warning_lighten">No note provided</span>
        )}
      </h5>
    </td>

    <td>
      <span className="text-muted font-13">Amount</span>
      <h5 className="font-14 mt-1 font-weight-normal">
        {numeral(amount / 100).format("$0,0.00")}-
      </h5>
    </td>
  </tr>
);

export default ExpenseListItem;
