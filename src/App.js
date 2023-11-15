import React, { useState } from "react";
import Quiz from "./Quiz";
import Instructions from "./Instructions";
import Congrats from "./Congrats";

function App() {
  const [begin, setBegin] = useState(true);
  const [finished, setFinished] = useState(false);
  const [timer, setTimer] = useState(60);

  return begin ? (
    <Instructions timer={timer} setTimer={setTimer} setBegin={setBegin} />
  ) : finished ? (
    <Congrats setFinished={setFinished} setBegin={setBegin} />
  ) : (
    <Quiz timer={timer} setBegin={setBegin} setFinished={setFinished} />
  );
}

export default App;
