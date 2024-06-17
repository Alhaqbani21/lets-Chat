import React from 'react';

const Message = ({ authorName, messageContent, color }) => {
  const baseStyles = 'p-3 rounded-md my-1 max-w-xs break-words max-w-[90%]';
  const colorStyles =
    color === 'green'
      ? 'bg-cyan-300 text-black self-start'
      : 'bg-[#2A323C] text-[#A0A49F] self-end';

  const nameAlignment = color === 'green' ? 'text-left' : 'text-right';

  return (
    <div className="flex flex-col">
      <div className={`text-sm text-gray-500 mb-1 ${nameAlignment} `}>
        {authorName}
      </div>
      <div className={`${baseStyles} ${colorStyles}`}>{messageContent}</div>
    </div>
  );
};

export default Message;
