import "./post.css";
import PropTypes from "prop-types";

// COMPONENT
import PostOptions from "./PostOptions";

// ICON
import { Avatar } from "@material-ui/core";

function PostTop({ username, timestamp }) {
  return (
    <div className="post-top-info">
      <h3>{username}</h3>
      <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
    </div>
  );
}

PostTop.propTypes = {
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
};

function PostBottom({ message, image }) {
  return (
    <>
      <div className="post-bottom">
        <p>{message}</p>
      </div>
      <div className="post-image">
        <img src={image} alt="" />
      </div>
      <PostOptions />
    </>
  );
}

PostBottom.propTypes = {
  message: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default function Post({
  profilePic,
  image,
  username,
  timestamp,
  message,
}) {
  return (
    <div className="post">
      <div className="post-top">
        <Avatar className="post-avatar" src={profilePic} />
        <PostTop username={username} timestamp={timestamp} />
        <PostBottom message={message} timestamp={timestamp} />
      </div>
    </div>
  );
}

Post.propTypes = {
  profilePic: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};
