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
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

// REDUX
// import { useStateValue } from "../../state/StateProvider";

export default function Sidebar() {
  // const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      {/* <SidebarRow src={useStateValue.photoURL} title={user.displayName} /> */}
      <SidebarRow
        src="https://avatars2.githubusercontent.com/u/2205020?s=400&u=9e0e505d15c8bca953fbcc3170f65b22dc08e607&v=4"
        title="Moises Sanabria"
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreIcon} title="More" />
    </div>
  );
}
