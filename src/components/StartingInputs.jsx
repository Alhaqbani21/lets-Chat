import React, { useState } from 'react';
import styles from './StartingInputs.module.css';

function StartingInputs(props) {
  return (
    <div className="flex flex-col gap-5 lg:text-2xl justify-center items-center w-[50%] p-5 max-md:w-[80%]">
      <div className="flex flex-col gap-1 lg:text-2xl w-[100%] max-md:w-[100%]">
        <label className="text-gray-400 font-bold">
          Enter Name for 1st phone
        </label>
        <input
          type="text"
          name="text"
          className={`${styles.input} placeholder-gray-500 `}
          placeholder="Phone Name 1"
          value={props.input1}
          onChange={(e) => props.setInput1(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.onStartChat();
            }
          }}
        />
        <label className="text-red-400 text-base">{props.invalidInput1}</label>
      </div>
      <div className="flex flex-col gap-1 lg:text-2xl w-[100%] max-md:w-[100%]">
        <label className="text-gray-400 font-bold">
          Enter Name for 2nd phone
        </label>
        <input
          type="text"
          name="text"
          className={`${styles.input} placeholder-gray-500`}
          placeholder="Phone Name 2"
          value={props.input2}
          onChange={(e) => props.setInput2(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              props.onStartChat();
            }
          }}
        />
        <label className="text-red-400 text-base">{props.invalidInput2}</label>
      </div>

      <button
        className="btn btn-active bg-gray-700 hover:bg-gray-400 lg:text-3xl text-xl  max-md:w-[60%] "
        onClick={props.onStartChat}
      >
        Chat Now 🗨️
      </button>
    </div>
  );
}

export default StartingInputs;
