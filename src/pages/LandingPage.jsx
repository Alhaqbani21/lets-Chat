import React from 'react';
import NavBar from '../components/NavBar';
import landingImage from '../assets/landingImage.png';
import bg1 from '../assets/bg.png';

function LandingPage() {
  return (
    <>
      <NavBar title="Chat Now" link="./chat" color="text-cyan-300" />
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

        <div className="relative flex flex-col justify-center items-center min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse max-lg:flex-wrap">
            <img
              src={landingImage}
              className="max-w-lg max-md:max-w-xs rounded-lg shadow-2xl "
            />
            <div>
              <h1
                className="text-5xl font-bold text-white"
                style={{
                  textShadow: `1px 1px 1px #000,
                    -2px 2px 2px #000,
                    -1px -1px 0 #000,
                    1px -1px 0 #000 `,
                }}
              >
                Let's Chat
              </h1>
              <p className="py-6 text-white">
                Experience instant messaging like never before with Let's Chat.
                Connect seamlessly between two mobile devices and enjoy
                real-time conversations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
