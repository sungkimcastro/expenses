import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";
import Footer from "./Footer";

const ExpenseDashboardPage = () => (
  <div className="content-page">
    <div className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <ExpensesSummary />
          <ExpenseListFilters />
        </div>
      </div>
    </div>
    <ExpenseList />
    <Footer />
  </div>
);

export default ExpenseDashboardPage;
