import React from "react";

function Congrats({ setFinished, setBegin }) {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-3">
      <h1 className="text-2xl font-bold">
        Congratulations, QuizFlash Explorer!{" "}
        <span className="text-4xl">🎉</span>
      </h1>
      <p className="max-w-xl mt-5">
        You've successfully navigated through the realms of knowledge. Your
        quest for wisdom has triumphed! Keep the learning flame alive and stay
        tuned for more QuizFlash adventures. Until our next journey together,
        keep shining bright!
      </p>

      <button
        onClick={() => {
          setBegin(true);
          setFinished(false);
        }}
        className={`mt-12 bg-teal-500 transition-colors hover:bg-teal-800 py-2 px-5 rounded-xl hover:text-white `}
      >
        Try again with different timers?
      </button>
    </div>
  );
}

export default Congrats;
