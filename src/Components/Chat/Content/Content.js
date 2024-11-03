import "./Content.css";
import { useForm } from "react-hook-form";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef } from "react";

import Components from "../../../Style/Components/Components";
import { useDispatch, useSelector } from "react-redux";
import { ActGetMessages } from "../../../Redux/Chat/ChatSlice";
import LoadingPage from "../../LoadingPage/LoadingPage";

export default function Content({id}) {
  const endRef = useRef(null);
  const { MyComponentDivHeader } = Components();
  // const { value } = useSelector((state) => state.mode);
  const { register } = useForm();
  const dispatch = useDispatch();
  const { messages, loading2 } = useSelector((state) => state.chat);
  useEffect(() => {
    dispatch(ActGetMessages(id));
  }, [dispatch , id]);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  let newData = messages.map((message) => {
    return (
      <div className={message.is_f ? "chat-msg user light" : "chat-msg light"}>
        <p>{message.text}</p>
        <span className="time">06:04 PM</span>
      </div>
    );
  });
  return (
    <>
      {loading2 === "pending" ? (
        <LoadingPage />
      ) : (
        <>
          <div className="chat-container">{newData}</div>
          <div ref={endRef}></div>
          <div className="message-box">
            <form style={{ display: "flex", alignItems: "center" }}>
              <MyComponentDivHeader className="message-content">
                <SentimentSatisfiedAltIcon />
                <input type="text" name="text" {...register("text")} />
                <input type="hidden" name="id" {...register("id")} />
                <AttachFileIcon />
                <KeyboardVoiceIcon />
              </MyComponentDivHeader>
              <button style={{ marginLeft: "1rem" }} className="micro">
                <SendIcon />
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}
