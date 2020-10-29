import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";

export default function PostOptions() {
  return (
    <div className="post-options">
      <div className="post-option">
        <ThumbUpIcon />
        <p>Like</p>
      </div>
      <div className="post-option">
        <ChatBubbleOutlineIcon />
        <p>Comment</p>
      </div>
      <div className="post-option">
        <NearMeIcon />
        <p>Share</p>
      </div>
      <div className="post-option">
        <AccountCircleIcon />
        <ExpandMoreOutlined />
      </div>
    </div>
  );
}
