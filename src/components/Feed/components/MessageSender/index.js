import "./message-sender.css";

// ICON
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

// STATE
import { useStateValue } from "../../../../state/StateProvider";
import db from "../../../../state/firebase";
import firebase from "firebase";

function MessageSenderTop() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="message-sender-top">
      <Avatar />
      <form>
        <input
          className="message-sender-input"
          placeholder={`What's on your mind`}
        />
        <input placeholder="image URL (Optional)" />

        <button onClick={handleSubmit} type="submit">
          Hidden Submit
        </button>
      </form>
    </div>
  );
}

function MessageSenderBottom() {
  return (
    <div className="message-sender-bottom">
      <div className="message-sender-option">
        <VideocamIcon style={{ color: "red" }} />
        <h3>Live Video</h3>
      </div>
      <div className="message-sender-option">
        <PhotoLibraryIcon style={{ color: "green" }} />
        <h3>Photo Video</h3>
      </div>
      <div className="message-sender-option">
        <InsertEmoticonIcon style={{ color: "orange" }} />
        <h3>Feeling / Activity</h3>
      </div>
    </div>
  );
}

export default function MessageSender() {
  return (
    <div className="message-sender">
      <div>Message Sender</div>
      <MessageSenderTop />
      <MessageSenderBottom />
    </div>
  );
}
