import React, { useState } from 'react';
import Phone from './Phone';

function ChatApp({ input1, input2 }) {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (author, content) => {
    setMessages([...messages, { author, content }]);
  };

  return (
    <div className="flex justify-evenly items-center w-full gap-5 flex-wrap max-md:flex-col max-md:justify-center">
      <div className="flex flex-col justify-center items-center">
        <Phone
          name={input1}
          receiver={input2}
          messages={messages}
          onSendMessage={(content) => handleSendMessage(input1, content)}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Phone
          name={input2}
          receiver={input1}
          messages={messages}
          onSendMessage={(content) => handleSendMessage(input2, content)}
        />
      </div>
    </div>
  );
}

export default ChatApp;
