import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ authorName, messageContent, isSender }) => {
  const baseStyles = 'p-3 rounded-md my-1 max-w-xs break-words max-w-[90%]';
  const colorStyles = isSender
    ? 'bg-cyan-300 text-black self-start text-left'
    : 'bg-gray-500 text-white self-end text-right';

  return (
    <div className={`flex flex-col ${isSender ? 'items-start' : 'items-end'}`}>
      <div
        className={`text-sm text-gray-300 mb-1 ${
          isSender ? 'text-left' : 'text-right'
        }`}
      >
        {authorName}
      </div>
      <div className={`${baseStyles} ${colorStyles}`}>{messageContent}</div>
    </div>
  );
};

Message.propTypes = {
  authorName: PropTypes.string.isRequired,
  messageContent: PropTypes.string.isRequired,
  isSender: PropTypes.bool.isRequired,
};

export default Message;
