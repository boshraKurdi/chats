import "../Chat.css";
import "./SideBar.css";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Components from "../../../Style/Components/Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ActGetChat } from "../../../Redux/Chat/ChatSlice";
import Content from "./Content/Content";
export default function SideBar() {
  const { MyComponentDivHeader } = Components();
  const dispatch = useDispatch()
  const { myChats , loading } = useSelector((state) => state.chat)
  const newData = myChats.chat.map((chat) => {
    return(
      <Content key={chat.id} chat={chat} />
    )
  })
  useEffect(()=>{
    dispatch(ActGetChat());
  } ,[dispatch])
  console.log(loading)
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
            {loading === "pending" ? 'loading..' : newData}
        </div>
      </div>
      <div className="pen">
        <CreateIcon />
      </div>
    </MyComponentDivHeader>
  );
}
