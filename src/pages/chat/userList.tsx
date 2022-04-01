import { useState, useEffect } from "react";
import keqing from "../../asset/avatar/keqing.png";
import abeiduo from "../../asset/avatar/abeiduo.png";
import qiqi from "../../asset/avatar/qiqi.png";

interface IAvatar {
  [string: string]: string;
}
const avatarMap:IAvatar = {
  0: keqing,
  1: abeiduo,
  2: qiqi,
};

function UserList() {
  const [number, setNumber] = useState(0);
  const [users, setUser] = useState([
    { name: "刻晴", id: 1, status: true },
    { name: "胡桃", id: 2, status: false },
  ]);
  useEffect(() => {
    // 随机整数
    const randomNumber = Math.floor(Math.random() * 3);
    setNumber(randomNumber);
  }, []);
  return (
    <div className="userListBox">
      <ul>
        {users.map((item, index) => {
          return (
            <li key={item.id}>
              <div
                className="avatar"
                style={{ backgroundImage: `url(${avatarMap[Math.floor(Math.random() * 3)]})` }}
              ></div>
              <div className="userInfo">
                <p className="nickName">{item.name}</p>
                <p className="status">
                  {" "}
                  <div
                    className="circle"
                    style={{ background: item.status ? "lightgreen" : "gray" }}
                  ></div>{" "}
                  {item.status ? "在线" : "离线"}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default UserList;
