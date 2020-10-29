import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";

import "./sidebar-row.css";

export default function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebar-row">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}

      <h4>{title}</h4>
    </div>
  );
}

SidebarRow.propTypes = {
  src: PropTypes.string.isRequired,
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
};
