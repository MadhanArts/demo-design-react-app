import React, {useState} from "react";
import Notification from "./Notification";
import "./NotificationFrame.css";

function NotificationFrame() {
  const [notification, setNotification] = useState(false);

  const showNotification = () => {
    setNotification(!notification);
  };

  return (
    <div className='container notification-frame'>
      <button className='notification-button' onClick={showNotification}>
        {notification ? "Hide Notification" : "Show Notification"}
      </button>
      <Notification show={notification}>Message Came!!!</Notification>
    </div>
  );
}

export default NotificationFrame;
