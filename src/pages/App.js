import { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import Header from "../components/Header";
import Login from "../components/Login";
import Game from "../components/Game";

function App() {
  const [step, setStep] = useState(1);
  const [name, setName] = useLocalStorage("name", "");

  useEffect(() => {
    if (name !== "") {
      setStep(2);
    }
  }, []);

  return (
    <div className="container px-4 mx-auto h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center h-3/4 p-4 bg-slate-500 border-2 rounded-lg">
        {step === 1 ? <Login chageStep={setStep} /> : step === 2 ? <Game chageStep={setStep} /> : <Login chageStep={setStep} />}
      </div>
    </div>
  );
}

export default App;
