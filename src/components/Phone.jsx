import React, { useRef, useState, forwardRef } from 'react';
import Message from './Message';
import SendButton from './SendButton';
import IconUp from '../assets/IconUp.jsx';
import IconDown from '../assets/IconDown.jsx';

const Phone = forwardRef(
  (
    { name, messages, onSendMessage, receiver, positionPhone, onIconClick },
    ref
  ) => {
    const [inputValue, setInputValue] = useState('');
    const [borderNow, setBorderNow] = useState('border-gray-300');
    const chatContainerRef = useRef(null);

    const handleSendMessage = () => {
      if (inputValue.trim()) {
        onSendMessage(inputValue);
        setTimeout(() => {
          if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop =
              chatContainerRef.current.scrollHeight;
          }
        }, 0);
        setInputValue('');
      }
    };

    const getAvatarUrl = () => {
      return `https://ui-avatars.com/api/?name=${receiver}&size=128`;
    };

    return (
      <div
        ref={ref}
        className="w-96 mx-auto my-10 flex justify-center items-center flex-col max-md:h-[80vh]"
      >
        <h2
          className="text-center text-2xl font-bold mb-4 text-white"
          style={{
            textShadow: `2px 2px 2px gray, -1px 1px 1px gray, -1px -1px 0 gray, 1px -1px 0 gray`,
          }}
        >
          {name}'s Phone
        </h2>
        <div
          className={`mockup-phone ${borderNow} overflow-hidden max-md:max-w-[80%]`}
        >
          <div className="camera"></div>
          <div className="display bg-whatsapp-bg bg-cover bg-center p-1 h-full flex flex-col justify-between">
            <div
              className={`contact-info flex items-center my-5 border-b-2 pb-2 ${borderNow} p-3`}
            >
              <img
                src={getAvatarUrl()}
                alt={`${receiver}'s avatar`}
                className="w-12 h-12 rounded-full mr-3 max-md:w-10 max-md:h-10"
              />
              <div>
                <h3 className="text-lg font-semibold max-md:text-base">
                  {receiver}
                </h3>
                <p className="text-gray-700">Online</p>
              </div>
              {positionPhone === 'up' ? (
                <IconUp onClick={onIconClick} />
              ) : (
                <IconDown onClick={onIconClick} />
              )}
            </div>

            <div
              ref={chatContainerRef}
              className="artboard phone-1 flex flex-col-reverse space-y-2 mb-4 overflow-y-auto overflow-x-hidden p-2 max-w-[100%] mt-2"
            >
              {messages.map((msg, index) => (
                <Message
                  key={index}
                  authorName={msg.author}
                  messageContent={msg.content}
                  isSender={msg.author === name}
                />
              ))}
            </div>
            <div className="flex items-center space-x-2 p-2 rounded">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow p-2 border border-gray-300 rounded-full text-black peer max-md:max-w-[80%]"
                placeholder="Type a message"
                onFocus={() => setBorderNow('border-blue-500')}
                onBlur={() => setBorderNow('border-gray-300')}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                  }
                }}
              />
              <SendButton onClick={handleSendMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default Phone;
