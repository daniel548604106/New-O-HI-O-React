import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleChat } from '../../../store/chat/chatAction';
import classes from './ChatHeader.module.scss';

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
