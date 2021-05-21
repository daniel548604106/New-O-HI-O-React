import React, { useState, useEffect } from 'react';
import classes from './ChatRoom.module.scss';
import io from 'socket.io-client';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
let socket;
const connectionOptions = {
  'force new connection': true,
  reconnectionAttempts: 'Infinity',
  timeout: 10000,
  transports: ['websocket'],
};
const ChatRoom = ({ chat }) => {
  const user = useSelector((state) => state.user.currentUser);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const time = new Date();
  const ENDPOINT = 'http://localhost:3001';
  const sendMessage = async (e) => {
    e.stopPropagation();
    if (!message) return;
    socket.emit('getMessage', { sender: user.name, message, timeStamps: time });
    setMessage('');
  };

  useEffect(() => {
    socket = io(ENDPOINT, connectionOptions);
    if (chat) {
      // const recipient = chat.participants.find((participant) => participant._id !== userId);
      // setRecipient(recipient);
      socket.emit('join', { roomId: chat });
    }

    return () => {
      // socket.emit('disconnect');
      // turn the chat person offline
      socket.off();
    };
  }, [chat]);

  useEffect(() => {
    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, [messages]);
  return (
    <div className={classes.chat}>
      <div className={classes.chatRoomHeader}>{chat && chat._id}</div>
      <div className={classes.messages}>
        {messages &&
          messages.map((message) => (
            <span className={classes.dialogue} key={message.timeStamps}>
              {message.message}
            </span>
          ))}
      </div>
      <div className={classes.messageForm} action="">
        <input
          onKeyPress={(e) => event.code === 'Enter' && sendMessage(e)}
          onChange={(e) => setMessage(e.target.value)}
          id="input"
          value={message}
          autoComplete="off"
          placeholder="請輸入文字"
        />
        <div className={classes.inputButtonRow}>
          <button onClick={(e) => sendMessage(e)}>Send</button>
        </div>
      </div>
    </div>
  );
};

ChatRoom.propTypes = {
  chat: PropTypes.object,
};

export default ChatRoom;
