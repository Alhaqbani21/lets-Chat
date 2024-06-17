import React from 'react';
import NavBar from '../components/NavBar';
import landingImage from '../assets/landingImage.png';

function LandingPage() {
  return (
    <>
      <NavBar title="Chat Now" link="./chat" color="text-cyan-300" />
      <div className="hero min-h-screen bg-cyan-500">
        <div className="hero-content flex-col lg:flex-row-reverse max-lg:flex-wrap">
          <img src={landingImage} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1
              className="text-5xl font-bold"
              style={{
                textShadow: `1px 1px 1px #000,
    -2px 2px 2px #000,
    -1px -1px 0 #000,
    1px -1px 0 #000 `,
              }}
            >
              Let's Chat
            </h1>
            <p className="py-6">
              Experience instant messaging like never before with Let's Chat.
              Connect seamlessly between two mobile devices and enjoy real-time
              conversations
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
