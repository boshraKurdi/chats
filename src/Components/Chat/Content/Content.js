
import './Content.css'
import { useForm } from "react-hook-form";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useRef } from "react";

import Components from "../../../Style/Components/Components";

export default function Content({ id }) {
  const endRef = useRef(null);
  const { MyComponentDivHeader } = Components();
  // const { value } = useSelector((state) => state.mode);
  const { register } = useForm();
  useEffect(() => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);
  // let newData = messages.map((message) => {
  //   return (
  //     <div
  //       className={
  //         value === "light"
  //           ? message.isCoach
  //             ? "chat-msg light"
  //             : "chat-msg light user"
  //           : message.isCoach
  //           ? "chat-msg dark"
  //           : "chat-msg dark user"
  //       }
  //     >
  //       <p>{message.text}</p>
  //       <span className="time">06:04 PM</span>
  //     </div>
  //   );
  // });
  return (
    <>
      <>
        <div className="chat-container">
          <div className={"chat-msg light user"}>
            <p>lorem</p>
            <span className="time">06:04 PM</span>
          </div>
        </div>
        <div ref={endRef}></div>
        <div className="message-box">
          <form style={{ display: "flex", alignItems: "center" }}>
            <MyComponentDivHeader className="message-content">
              <SentimentSatisfiedAltIcon />
              <input type="text" name="text" {...register("text")} />
              <input type="hidden" name="id" value={id} {...register("id")} />
              <AttachFileIcon />
              <KeyboardVoiceIcon />
            </MyComponentDivHeader>
            <button style={{ marginLeft: "1rem" }} className="micro">
              <SendIcon />
            </button>
          </form>
        </div>
      </>
    </>
  );
}
