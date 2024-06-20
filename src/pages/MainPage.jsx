import React, { useState } from 'react';
import bg1 from '../assets/bg.jpg';
import NavBar from '../components/NavBar';
import ChatApp from '../components/ChatApp';
import StartingInputs from '../components/StartingInputs';
import mainPageImage from '../assets/mainPageImage.svg';

function MainPage() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [showPhones, setShowPhones] = useState(false);
  const [invalidInput1, setInvalidInput1] = useState('');
  const [invalidInput2, setInvalidInput2] = useState('');

  const handleResetChats = () => {
    setInput1('');
    setInput2('');
    setShowPhones(!showPhones);
  };

  const handleStartChat = () => {
    let valid = true;

    if (!input1) {
      setInvalidInput1('Invalid Input 😡');
      valid = false;
    } else {
      setInvalidInput1('');
    }

    if (!input2) {
      setInvalidInput2('Invalid Input 😡');
      valid = false;
    } else {
      setInvalidInput2('');
    }

    if (input1 && input2 && input1 === input2) {
      setInvalidInput1('Names should be different');
      setInvalidInput2('Names should be different');
      valid = false;
    }

    if (valid) {
      setShowPhones(true);
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
          }}
        ></div>
        <div className="relative flex flex-col justify-center items-center min-h-screen gap-10 pt-5 ">
          <div className="w-[50%] flex flex-col justify-center items-center gap-5 max-md:w-[80%] rounded-lg shadow-lg py-5">
            <div className="flex flex-row-reverse max-md:flex-col justify-center items-center gap-5 max-md:w-[80%] max-md:py-5 ">
              <img
                className="max-w-[35%] max-md:max-w-xs  p-5 max-lg:mb-5 "
                src={mainPageImage}
                alt=""
              />
              <h1 className="tracking-wide text-3xl leading-10 p-3 text-center lg:text-5xl font-extrabold">
                Experience the ease of{' '}
                <span className="font-extrabold tracking-widest">
                  <p>Communicating</p>
                </span>{' '}
                <span
                  style={{
                    textShadow: `1px 1px 1px #000,
                    -1px 1px 1px #000,
                    -1px -1px 0 #000,
                    1px -1px 0 #000 `,
                  }}
                  className="text-cyan-200"
                >
                  freely
                </span>{' '}
                &{' '}
                <span
                  style={{
                    textShadow: `1px 1px 1px #000,
                    -1px 1px 1px #000,
                    -1px -1px 0 #000,
                    1px -1px 0 #000 `,
                  }}
                  className="text-cyan-200"
                >
                  effortlessly
                </span>
              </h1>
            </div>
            {showPhones && (
              <button
                className="btn btn-active text-black bg-orange-300 hover:bg-orange-700 hover:text-white lg:text-2xl  max-md:w-[50%] "
                onClick={handleResetChats}
              >
                Reset chats ⟳
              </button>
            )}
          </div>

          {!showPhones && (
            <StartingInputs
              input1={input1}
              input2={input2}
              setInput1={setInput1}
              setInput2={setInput2}
              onStartChat={handleStartChat}
              invalidInput1={invalidInput1}
              invalidInput2={invalidInput2}
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
