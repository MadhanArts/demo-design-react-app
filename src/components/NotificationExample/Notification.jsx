import React from "react";
import "./Notification.css";

function Notification(props) {
  const baseClass = "notification";
  let classnames = "";
  if (props.show) {
    classnames = baseClass + " show";
  } else {
    classnames = baseClass + " hide";
  }

  return <div className={classnames}>{props.children}</div>;
}

export default Notification;
