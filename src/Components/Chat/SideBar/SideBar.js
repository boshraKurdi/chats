import "../Chat.css";
import "./SideBar.css";
import CreateIcon from "@mui/icons-material/Create";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { memo, useCallback, useEffect, useState } from "react";
import { ActGetChat } from "../../../Redux/Chat/ChatSlice";
import Content from "./Content/Content";
import SkeletonLoading from "../../SkeletonLoading/SkeletonLoading";
import BrightnessMediumIcon from '@mui/icons-material/BrightnessMedium';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { SetMode, SetOpen } from "../../../Redux/Mode/ModeSlice";
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from "@emotion/react";
const SideBar = memo(()=> {
  const theme = useTheme();
  const dispatch = useDispatch()
  const { myChats , loading } = useSelector((state) => state.chat)
  const { value , open } = useSelector((state)  => state.mode)
  const [searchTerm, setSearchTerm] = useState('');
  const filteredChats = searchTerm
  ? myChats.filter(chat => 
      chat.f_name.toLowerCase().includes(searchTerm.toLowerCase()) 
    )
  : myChats;
  const newData = filteredChats.map((chat) => {
    return(
      <Content key={chat.id} chat={chat} />
    )
  })
  useEffect(()=>{
    dispatch(ActGetChat());
  } ,[dispatch])
  const handleSearchChange = useCallback((e) => {
    setSearchTerm(e.target.value);
  }, []);
  const modeValue = (value === 'light') ? 'dark' : 'light'
  return (
    <div style={{backgroundColor: theme.palette.primary.main}} className={open ? "right-side open" : 'right-side'}>
      <div className="before"></div>
      <div style={{backgroundColor: theme.palette.primary.main,}}  className="header-container">
        <div className="chat_header">
          <div className="toggle-button" onClick={()=>{dispatch(SetMode(modeValue))}}>
            {value === 'light' ? <BrightnessMediumIcon /> : <Brightness4Icon />}
          </div>
          <div className="search-box">
            <SearchIcon />
            <input value={searchTerm} onChange={handleSearchChange} type="text" placeholder="Search" />
          </div>
          <CloseIcon className="close" onClick={()=>{dispatch(SetOpen())}}/>
        </div>
      </div>
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
    </div>
  );
})
export default SideBar