import React, { useState } from 'react';
import bg1 from '../assets/bg.jpg';
import NavBar from '../components/NavBar';
import ChatApp from '../components/ChatApp';
import StartingInputs from '../components/StartingInputs';

function MainPage() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showPhones, setShowPhones] = useState(false);

  const handleStartChat = () => {
    if (input1 && input2) {
      if (input1 !== input2) {
        setShowPhones(true);
      } else {
        alert('Names should be different');
      }
    } else {
      alert('Please enter names for both phones.');
    }
  };

  return (
    <>
      <NavBar title="Home" link="../" />
      <div className="relative w-full h-full min-h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundRepeat: 'no-repeat',
            filter: 'blur(8px)',
            WebkitFilter: 'blur(8px)',
          }}
        ></div>
        <div className="relative flex flex-col justify-center items-center min-h-screen gap-10 pt-5">
          <h1 className="tracking-wide text-3xl leading-10 text-center lg:text-5xl font-extrabold">
            Experience the ease of{' '}
            <span className="font-extrabold tracking-widest">
              <p
              // style={{
              //   textShadow: `1px 1px 1px gray,
              //     -1px 1px 1px gray,
              //     -1px -1px 0 gray,
              //     1px -1px 0 gray `,
              // }}
              >
                Communicating
              </p>
            </span>{' '}
            freely & effortlessly
          </h1>
          {!showPhones && (
            <StartingInputs
              input1={input1}
              input2={input2}
              setInput1={setInput1}
              setInput2={setInput2}
              onStartChat={handleStartChat}
            />
          )}
          {showPhones && (
            <div className="flex flex-wrap justify-between items-center w-full gap-5">
              <ChatApp input1={input1} input2={input2} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MainPage;
