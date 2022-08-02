import React from "react";

export default function Alert(props) {
  return (
    props.alert && (
      <div
        className="position-fixed top-3 end-0 d-inline  alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{props.alert.type}</strong>: {props.alert.msg}
      </div>
    )
  );
}
