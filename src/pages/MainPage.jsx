import React from 'react';
import Phone from '../components/Phone';
import NavBar from '../components/NavBar';
import ChatApp from '../components/ChatApp';

function MainPage() {
  return (
    <>
      <NavBar title="Home" link="../" />
      <div className="flex flex-col justify-center items-center flex-wrap min-h-screen gap-10 pt-5 bg-cyan-500">
        <h1 className="font-Roboto tracking-wide text-3xl leading-10 text-center">
          Experience the ease of{' '}
          <span className="text-cyan-300 font-extrabold tracking-widest	">
            <p
              style={{
                textShadow: `2px 2px 2px #000,
    -1px 1px 1px #000,
    -1px -1px 0 #000,
    1px -1px 0 #000 `,
              }}
            >
              Communcating
            </p>
          </span>{' '}
          freely & effortlessly
        </h1>
        <div className="flex flex-wrap justify-between items-center w-[100%] gap-5">
          <ChatApp />
        </div>
      </div>
    </>
  );
}

export default MainPage;
