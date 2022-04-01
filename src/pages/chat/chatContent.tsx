import { useState } from "react";
import { Button } from 'antd';
// import 'antd/dist/antd.css';
interface IChatItem {
  isMine: boolean
  content: string
}
function ChatContent() {
  const [chatItem, addChat] = useState<IChatItem[]>([])
  const [chatContent, setChatContent] = useState('')

  const sendMessage = () => {
    const editContent = {isMine: true , content: chatContent}
    const arr = [...chatItem,editContent]
    addChat(arr)
    console.log(chatItem)
  }
  return (
    <div className="chatContent">
      <div className="chatContent__header">
        <div className="chatContent__header__left">
          <div className="nickName">
            <span>自然</span>
          </div>
        </div>
      </div>
      <div className="chatContent__body">
        <ul>
          {
            chatItem.map(item => {
              return (
                <li className="align_right">
                  <div className="chat_item">{item.content}</div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="chat_input">
        <div className="chat_tools"></div>
        <textarea value={chatContent} onChange={(e) => setChatContent(e.target.value)} />
        <div className="sendMessage">
        <Button type="primary" block onClick={sendMessage}>发送</Button>
        </div>
      </div>
    </div>
  );
}

export default ChatContent;
