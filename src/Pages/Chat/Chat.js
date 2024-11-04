import "./Chat.css";
import Content from "../../Components/Chat/Content/Content";
import SideBar from "../../Components/Chat/SideBar/SideBar";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import HorizontalSplitIcon from "@mui/icons-material/HorizontalSplit";
import Components from "../../Style/Components/Components";
import Image from '../../Img/about-coach.jpg'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActShow } from "../../Redux/Chat/ChatSlice";
import SkeletonLoading from "../../Components/SkeletonLoading/SkeletonLoading";
export default function Chat() {
  const { MyComponentDivHeader } = Components();
  const { params } = useSelector((state)=> state.mode)
  const dispatch = useDispatch()
  const { myChat , loading3 } = useSelector((state) => state.chat)
  useEffect(() => {
    dispatch(ActShow(params))
  } ,[dispatch , params])
  const { value } = useSelector((state) => state.mode);
  return (
    <main className="chat">
      <SideBar />
      <section
        className={
          value === "light" ? "chat_content light" : "chat_content dark"
        }
      >
        <div className="chat_container" id="chatBox">
          <MyComponentDivHeader className="content-header">
            <HorizontalSplitIcon
              className="barsChat"
              style={{ fontSize: "3rem" }}
            />
            <SkeletonLoading loading={loading3} type="headerChat">
              <div className="image">
                <img
                  src={Image}
                  alt=""
                />
              </div>
              <div className="details">
                <h3>{myChat.f_name}</h3>
                <span>last seen 10 minutes ago</span>
              </div>
            </SkeletonLoading>
            <div className="icons">
              <PhoneIcon />
              <SearchIcon />
            </div>
          </MyComponentDivHeader>
          <Content id={params} />
        </div>
      </section>
    </main>
  );
}
