import React from 'react';

function IconUp(props) {
  return (
    <button
      className={`flex w-full flex-row-reverse md:hidden `}
      onClick={props.onClick}
    >
      <div className="flex flex-row-reverse gap-2 border border-cyan-900 px-2 py-1 rounded-md justify-center items-center shadow-2xl hover:bg-cyan-900">
        <svg
          fill="#67e8f9"
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          transform="rotate(180)"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <g>
              {' '}
              <g>
                {' '}
                <g>
                  {' '}
                  <path d="M256,0C114.618,0,0,114.618,0,256s114.618,256,256,256s256-114.618,256-256S397.382,0,256,0z M256,469.333 c-117.818,0-213.333-95.515-213.333-213.333S138.182,42.667,256,42.667S469.333,138.182,469.333,256S373.818,469.333,256,469.333 z"></path>{' '}
                  <path d="M347.582,198.248L256,289.83l-91.582-91.582c-8.331-8.331-21.839-8.331-30.17,0c-8.331,8.331-8.331,21.839,0,30.17 l106.667,106.667c8.331,8.331,21.839,8.331,30.17,0l106.667-106.667c8.331-8.331,8.331-21.839,0-30.17 C369.42,189.917,355.913,189.917,347.582,198.248z"></path>{' '}
                </g>{' '}
              </g>{' '}
            </g>{' '}
          </g>
        </svg>
        <span className="text-sm">First phone</span>
      </div>
    </button>
  );
}

export default IconUp;
