import React from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center text-primary mt-5">
      <div className="spinner-border">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
