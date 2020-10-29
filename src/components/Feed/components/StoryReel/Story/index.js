import "./story.css";
import PropTypes from "prop-types";

// ICON
import { Avatar } from "@material-ui/core";

export default function Story({ image, profileSrc, title }) {
  return (
    <div className="story" style={{ backgroundImage: `url(${image})` }}>
      <Avatar className="story-avatar" src={profileSrc} />
      <h4>{title}</h4>
    </div>
  );
}

Story.propTypes = {
  image: PropTypes.string.isRequired,
  profileSrc: PropTypes.string.isRequired,
  title: PropTypes.title.string.isRequired,
};
