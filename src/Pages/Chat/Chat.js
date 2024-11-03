import "./Chat.css";
// import { useParams } from "react-router-dom";
import Content from "../../Components/Chat/Content/Content";
import SideBar from "../../Components/Chat/SideBar/SideBar";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import Components from "../../Style/Components/Components";
import Image from '../../Img/about-coach.jpg'
export default function Chat() {
  const { MyComponentDivHeader } = Components();
  // const { id } = useParams();
  // const { value } = useSelector((state) => state.mode);
  return (
    <main className="chat">
      <SideBar />
      <section
        className={
          "light" === "light" ? "chat_content light" : "chat_content dark"
        }
      >
        <div className="chat_container" id="chatBox">
          <MyComponentDivHeader className="content-header">
            <HorizontalSplitIcon
              className="barsChat"
              style={{ fontSize: "3rem" }}
            />
              <div className="image">
                <img
                  src={Image}
                  alt=""
                />
              </div>
              <div className="details">
                <h3>firnds name</h3>
                <span>last seen 10 minutes ago</span>
              </div>
            <div className="icons">
              <PhoneIcon />
              <SearchIcon />
            </div>
          </MyComponentDivHeader>
          <Content id='1' />
        </div>
      </section>
    </main>
  );
}
