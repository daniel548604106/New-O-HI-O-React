import React, { useEffect, useState } from 'react';
import classes from './ChatList.module.scss';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveChat } from '../../../store/chat/chatAction';
const ChatCover = ({ chat }) => {
  const userId = useSelector((state) => state.user.currentUser._id);
  const [recipient, setRecipient] = useState({});

  useEffect(() => {
    const recipientChat = chat.participants.filter((participant) => {
      return participant._id !== userId;
    });

    setRecipient(recipientChat[0]);
  }, [chat, userId]);
  return (
    <div className={classes.chatCoverRow}>
      <img
        src="https://images.unsplash.com/photo-1585424264203-3e5c0c3da915?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZWFycmluZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        alt="shop-logo"
      />
      <div>
        <p className={classes.shopName}>{recipient && recipient.name}</p>
        <div className={classes.chatInfo}>
          <p className={classes.lastMessage}>您好，請問你需要什麼服務嗎？ sdfjosdjfiosjd</p>
          <span className={classes.chatTime}>2020/12/13</span>
        </div>
      </div>
    </div>
  );
};
const ChatList = ({ chats }) => {
  const dispatch = useDispatch();
  const handleActiveChat = (idx) => {
    dispatch(setActiveChat(idx));
  };

  return (
    <div className={classes.chatList}>
      <input className={classes.searchInput} type="text" placeholder="搜尋對話" />
      <div className={classes.chats}>
        {chats.map((chat, idx) => (
          <ChatCover onClick={() => handleActiveChat(idx)} key={chat._id} chat={chat} />
        ))}
      </div>
    </div>
  );
};

ChatList.propTypes = {
  chats: PropTypes.array,
};

ChatCover.propTypes = {
  chat: PropTypes.object,
};
export default ChatList;
