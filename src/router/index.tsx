import React from 'react'; 
//引入基本的路由模块
import {BrowserRouter as Router, Route,Routes } from "react-router-dom";

import Chat from '../pages/chat/index'
import Login from '../pages/login/login'

function Routers(){
	return (
		<Router>
			<Routes>
				 //下面这句表示默认进入User.js页面
				 <Route path="/"  element={<Login/>} />
				 <Route path="/chat"  element={<Chat/>} />
			</Routes>
		</Router>);
}

// const routers = [
//     {path:"/", element: <Login />},
//     {path:"/chat"  , element: <Chat />},
// ]
// const Routers = () => useRoutes(routers)
export default Routers as any;
