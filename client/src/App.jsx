import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Feed from './pages/Feed'
import Messages from './pages/Messages'
import ChatBox from './pages/ChatBox'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'


const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Login />}>
            <Route index element = {<Feed />}></Route>
            <Route path='messages' element={<Messages />}></Route>
            <Route path='messages/:userId' element={<ChatBox />}></Route>
            <Route path = 'connections' element={<Connections />}></Route>
            <Route path = 'discover' element={<Discover />}></Route>
            <Route path = 'profile/:profileId' element={<Profile />}></Route>
            <Route path = 'create-post' element={<CreatePost />}></Route>
        </Route>
      </Routes>
    
    </>
  )
}

export default App