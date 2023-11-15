import React, { useEffect, useState } from "react";
import questionsArr from "./questionsArr.js";

const Timer = ({ seconds, setSeconds }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds === 0) {
          clearInterval(intervalId); // Clear interval when seconds reach zero
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [setSeconds]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <p
      className={`${
        seconds <= 5
          ? "text-red-500"
          : seconds <= 10
          ? "text-yellow-500"
          : "text-gray-600"
      } text-xl font-bold py-2 px-5`}
    >
      {formatTime(seconds)}
    </p>
  );
};

function Quiz({ timer, setFinished, setBegin }) {
  const [num, setNum] = useState(1);
  const [progress, setProgres] = useState(0);
  const [seconds, setSeconds] = useState(timer);
  const [showAnswer, setShowAnswer] = React.useState(false);
  const [start, setStart] = React.useState(false);

  return (
    <>
      <div className="mb-5 h-3 bg-gray-200">
        <div
          className="h-3 bg-teal-800"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex flex-col justify-center items-center mt-20 ">
        <div className="max-w-3xl text-center px-20 py-20">
          <h1 className="text-center text-2xl font-bold mb-5">{`Question ${num}`}</h1>
          <p className="mb-10 text-lg  ">{questionsArr[num - 1].question}</p>

          {showAnswer ? (
            <>
              <p className="mb-10 ">{questionsArr[num - 1].answer}</p>
              <button
                onClick={() => {
                  if (num === 10) {
                    setFinished(true);
                  }
                  setSeconds(timer);
                  setNum((num) => num + 1);
                  setProgres((prev) => prev + 10);
                  setStart(false);
                  setShowAnswer(false);
                }}
                className=" bg-teal-500 transition-colors hover:bg-teal-800 py-2 px-5 rounded-xl hover:text-white transition-colors"
              >
                {num === 10 ? "Finish" : "Next Question"}
              </button>
            </>
          ) : seconds === 0 ? (
            <button
              onClick={() => setShowAnswer(true)}
              className=" bg-teal-500 transition-colors hover:bg-teal-800 py-2 px-5 rounded-xl hover:text-white transition"
            >
              View answer
            </button>
          ) : start ? (
            <Timer seconds={seconds} setSeconds={setSeconds} />
          ) : (
            <button
              onClick={() => setStart(true)}
              className={`${
                start ? "hidden" : "visible"
              } bg-teal-500 transition-colors hover:bg-teal-800 py-2 px-5 rounded-xl hover:text-white transition-colors`}
            >
              Start the timer
            </button>
          )}
        </div>
        <button
          onClick={() => setBegin(true)}
          className=" text-center text-sm text-gray-500 hover:text-gray-900"
        >
          Back to Main page
        </button>
      </div>
    </>
  );
}

export default Quiz;
