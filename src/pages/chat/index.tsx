import UserList from "./userList";
import "./index.css";

function ChatPage() {
  return (
    <div className="chatPage">
      <div className="chatArea">
        <UserList></UserList>
      </div>
    </div>
  );
}

export default ChatPage;
