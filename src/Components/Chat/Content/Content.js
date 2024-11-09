import "./Content.css";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import EmojiPicker from 'emoji-picker-react';
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActGetMessages, addMessage } from "../../../Redux/Chat/ChatSlice";
import LoadingPage from "../../LoadingPage/LoadingPage";
import { useTheme } from "@emotion/react";

export default function Content({id}) {
  const theme = useTheme()
  const [active , setActive] = useState(false)
  const [form , setForm] = useState({ id: 10, chat_id: id , is_f: 0, f_id: 2 , text: "" })
  const { value } = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const { messages, loading2 } = useSelector((state) => state.chat);
  const lastMessageRef = useRef(null);
  useEffect(() => {
    dispatch(ActGetMessages(id));
  }, [dispatch , id]);
  let newData = messages.map((message) => {
    return (
      <div key={message.id} className={message.is_f ? (value === 'light' ? "chat-msg light" : 'chat-msg dark') : (value === 'light' ? "chat-msg user light" : 'chat-msg user dark')}>
        <p>{message.text}</p>
        <span className="time">06:04 PM</span>
      </div>
    );
  });

useEffect(() => {
  if (lastMessageRef.current) {
    lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [newData]);
  function HandelMessage(e ,data){
    e.preventDefault()
    dispatch(addMessage(data));
    setForm({...form , text: ''})
  }
  function HandelEomji(e){
    setForm(prevForm => ({
      ...prevForm,
      text: prevForm.text + e.emoji
    }));
    
    setActive(false)

}
  return (
    <>
      {loading2 === "pending" ? (
        <LoadingPage />
      ) : (
        <>
          <div className="chat-container">
          {newData.map((item, index) => (
            <div key={index} ref={index === newData.length - 1 ? lastMessageRef : null}>
              {item}
            </div>
          ))}
            </div>
          <div className="message-box">
            <form style={{ display: "flex", alignItems: "center" }}>
              <div style={{backgroundColor: theme.palette.primary.main}} className="message-content">
              <div className='emoji'>
                <SentimentSatisfiedAltIcon className='emo' onClick={(e)=>{setActive(prev => !prev)}} />
                <div className='piker'>
                  <EmojiPicker style={{height: '350px' ,width: '300px'}} open={active} onEmojiClick={HandelEomji} />
                </div>
              </div>
                <input type="text" name="text" placeholder="message" value={form.text} onChange={(e)=>{setForm({...form , text:e.target.value})}} />
                <AttachFileIcon />
                <KeyboardVoiceIcon />
              </div>
              <button onClick={(e)=>{HandelMessage(e , form)}} style={{ marginLeft: "1rem" }} className="micro">
                <SendIcon />
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
