import "./sidebar.css";

// COMPONENT
import SidebarRow from "./components/SidebarRow";

// ICONS
import { ExpandMoreOutlined } from "@material-ui/icons";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

// REDUX
import { useStateValue } from "../../state/StateProvider";

export default function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={useStateValue.photoURL} title={user.displayName} />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow src={ChatIcon} title="Messenger" />
      <SidebarRow src={StorefrontIcon} title="Marketplace" />
      <SidebarRow src={VideoLibraryIcon} title="Videos" />
      <SidebarRow src={ExpandMoreOutlined} title="More" />
    </div>
  );
}
