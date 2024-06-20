import React from 'react';
import NavBar from '../components/NavBar';
import landingImage from '../assets/landingImage.svg';
import chattingImage from '../assets/chattingImage.svg';
import bg1 from '../assets/bg.jpg';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <NavBar title="Chat Now" link="./chat" color="text-cyan-300" />
      <div className="relative w-full h-full min-h-screen">
        <div
          className="absolute inset-[1px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        <div className="relative flex flex-col justify-center items-center min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse max-lg:flex-wrap ">
            <img
              src={landingImage}
              className="max-w-[50%] max-md:max-w-xs rounded-lg shadow-2xl p-5 max-lg:mb-5 "
            />
            <div>
              <h1
                className="text-5xl font-extrabold text-cyan-200 lg:text-7xl"
                style={{
                  textShadow: `1px 1px 1px #000,
                    -2px 2px 2px #000,
                    -1px -1px 0 #000,
                    1px -1px 0 #000 `,
                }}
              >
                Let's Chat
              </h1>
              <p className="py-6 text-white text-xl font-bold">
                Experience instant messaging like never before with Let's Chat.
                Connect seamlessly between two mobile devices and enjoy
                real-time conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="h-full min-h-full flex justify-center items-center py-10 bg-gray-600 ">
        <div className="flex justify-center items-center max-md:flex-col ">
          <img
            className="max-w-[50%] max-md:max-w-xs rounded-lg shadow-2xl p-5"
            src={chattingImage}
            alt="chatImage"
          />

          <div className="card-body rounded-lg max-md:shadow-[rgba(17, 12, 46, 0.15) 0px 48px 100px 0px]">
            <span
              className="card-title text-4xl block"
              style={{
                textShadow: `1px 1px 1px #000,
                    -1px 1px 1px #000,
                    -1px -1px 0 #000,
                    1px -1px 0 #000 `,
              }}
            >
              Do you want to try
              <span className="text-cyan-200 "> Let's Chat </span> ?
            </span>
            <p className="text-xl">Don't miss this moment try it now </p>
            <div className="card-actions justify-end max-md:justify-center">
              <Link to={'./chat'}>
                <button className="btn btn-active bg-gray-700 hover:bg-gray-400 lg:text-2xl">
                  Try it now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default LandingPage;
