import React, { useState } from 'react';
import Phone from './Phone';

function ChatApp() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (author, content, color) => {
    setMessages([...messages, { author, content, color }]);
  };

  return (
    <div className="flex justify-evenly items-center w-full gap-5 flex-wrap">
      <div className="flex flex-col justify-center items-center ">
        <Phone
          name="Ahmed"
          receiver="Abdulaziz"
          messages={messages}
          onSendMessage={(content) =>
            handleSendMessage('Ahmed', content, 'green')
          }
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Phone
          name="Abdulaziz"
          receiver="Ahmed"
          messages={messages}
          onSendMessage={(content) =>
            handleSendMessage('Abdulaziz', content, 'dark')
          }
        />
      </div>
    </div>
  );
}

export default ChatApp;
