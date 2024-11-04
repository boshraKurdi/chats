import "../Chat.css";
import "./SideBar.css";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import Components from "../../../Style/Components/Components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ActGetChat } from "../../../Redux/Chat/ChatSlice";
import Content from "./Content/Content";
import SkeletonLoading from "../../SkeletonLoading/SkeletonLoading";
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { SetMode } from "../../../Redux/Mode/ModeSlice";
export default function SideBar() {
  const [ text , setText] = useState("")
  const { MyComponentDivHeader } = Components();
  const dispatch = useDispatch()
  const { myChats , loading } = useSelector((state) => state.chat)
  const { value } = useSelector((state)  => state.mode)
  const newData = myChats.map((chat) => {
    return(
      <Content key={chat.id} chat={chat} />
    )
  })
  useEffect(()=>{
    dispatch(ActGetChat());
  } ,[dispatch])
  function HandelSearch(e){
    console.log('search')
  }
  const modeValue = (value === 'light') ? 'dark' : 'light'
  return (
    <MyComponentDivHeader className="right-side">
      <MyComponentDivHeader className="header-container">
        <div className="chat_header">
          <div className="toggle-button" onClick={()=>{dispatch(SetMode(modeValue))}}>
            {value === 'light' ? <BrightnessMediumIcon /> : <Brightness4Icon />}
          </div>
          <div className="search-box">
            <SearchIcon />
            <input value={text} onChange={(e)=>{
              setText(e.target.value)
              HandelSearch(text)
            }} type="text" placeholder="Search" />
          </div>
        </div>
      </MyComponentDivHeader>
      <div className="body-container">
        <div className="chat-list">
        <SkeletonLoading loading={loading} type="chat">
          {newData}
        </SkeletonLoading>
        </div>
      </div>
      <div className="pen">
        <CreateIcon />
      </div>
    </MyComponentDivHeader>
  );
}
