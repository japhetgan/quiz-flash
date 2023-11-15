import React from "react";

function Instructions({ setBegin, timer, setTimer }) {
  const min = timer / 60;
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3 text-center">
      <h1 className="text-2xl font-bold">
        Welcome to QuizFlash! <span className="text-4xl">💡</span>
      </h1>
      <p>
        Answer a series of questions within the time limit to test your
        knowledge!
      </p>

      <div className="flex align-middle gap-5 mt-5">
        <button
          disabled={min === 1}
          onClick={() => setTimer((prev) => prev - 60)}
          className="hover:text-teal-900 font-black text-3xl  disabled:text-gray-500"
        >
          -
        </button>

        <h1 className="text-2xl font-bold">{`${min} minute${
          min > 1 ? "s" : ""
        }`}</h1>
        <button
          disabled={min === 5}
          onClick={() => setTimer((prev) => prev + 60)}
          className="hover:text-teal-900 font-black text-3xl disabled:text-gray-500"
        >
          +
        </button>
      </div>

      <button
        onClick={() => setBegin(false)}
        className={`mt-12 bg-teal-500 transition-colors hover:bg-teal-800 py-2 px-5 rounded-xl hover:text-white `}
      >
        Begin!
      </button>
    </div>
  );
}

export default Instructions;
