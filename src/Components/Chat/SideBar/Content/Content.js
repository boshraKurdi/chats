import Image from '../../../../Img/about-coach.jpg'
import { useDispatch } from "react-redux";
import { SetParams } from "../../../../Redux/Mode/ModeSlice";
import { memo } from 'react';

const Content = memo(({chat})=>{
  const dispatch = useDispatch()
    return(
        <div onClick={()=>{dispatch(SetParams(chat.id))}} className="chat-box" id="Msg">
            <div className="chat-img">
              <img src={Image} alt="" />
            </div>
            <div className="chat-details">
              <div className="chat-title">
                <h3>{chat.f_name}</h3>
                <span>06:04 PM</span>
              </div>
              <div className="chat-msg">
                <p>{chat.lastMessage}</p>
                <span>1</span>
              </div>
            </div>
          </div>
    )
})
export default Content