import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import classes from './ChatHeader.module.scss';
import { useDispatch } from 'react-redux';
import { toggleChat } from '../../../store/chat/chatAction';

const ChatHeader = () => {
  const dispatch = useDispatch();
  const handleToggleChat = () => {
    dispatch(toggleChat());
  };
  return (
    <div>
      <div onClick={() => handleToggleChat()} className={classes.closeBtn}>
        <CloseIcon />
      </div>

      <div className={classes.chatHeader}>聊聊</div>
    </div>
  );
};

export default ChatHeader;
