import React from "react";

const Spinner = (props) => {
  <div className="ui active dimmer">
    <div className="ui text loader">{props.message}</div>
  </div>;
};

// defaultProps = When properties are not filled in then show default values
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;
