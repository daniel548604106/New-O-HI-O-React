import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { apiGetAllChats } from '../../api/index';
import classes from './Chat.module.scss';
import ChatHeader from './ChatHeader/ChatHeader.jsx';
import ChatList from './ChatList/ChatList.jsx';
import ChatRoom from './ChatRoom/ChatRoom.jsx';
const Chat = () => {
  const activeChatIndex = useSelector((state) => state.chat.activeChat);
  const showChat = useSelector((state) => state.chat.showChat);
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  useEffect(() => {
    const getAllChats = async () => {
      const { data } = await apiGetAllChats();
      setChats(data.chats);
    };
    getAllChats();
  }, []);
  useEffect(() => {
    setActiveChat(chats[activeChatIndex]);
  }, [activeChatIndex, chats]);

  return (
    <>
      <div className={`${classes.chat} ${!showChat && classes.hideChat}`}>
        <div className={classes.chatHeader}>
          <ChatHeader />
        </div>
        <div className={classes.chatBody}>
          <div className={classes.chatRoom}>
            <ChatRoom chat={activeChat} />
          </div>
          <div className={classes.chatList}>
            <ChatList chats={chats} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
