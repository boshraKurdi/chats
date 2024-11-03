import "../Chat.css";
import "./SideBar.css";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Components from "../../../Style/Components/Components";
export default function SideBar() {
  const { MyComponentDivHeader } = Components();
  return (
    <MyComponentDivHeader className="right-side">
      <MyComponentDivHeader className="header-container">
        <div className="chat_header">
          <div className="toggle-button">
            <ArrowBackIcon />
          </div>
          <div className="search-box">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </MyComponentDivHeader>
      <div className="body-container">
        <div className="chat-list">
            newData
        </div>
      </div>
      <div className="pen">
        <CreateIcon />
      </div>
    </MyComponentDivHeader>
  );
}
