import FeatureList from "./components/list";
import Form from "./components/form";
import HeroImage from "./components/heroImg";
import Submit from "./components/submit";
import { useState } from "react";

function App() {
  const [showSubmit, setShowSubmit] = useState(false);
  const [email, setEmail] = useState(""); 

  function toggleSubmit(email) {
    setEmail(email);
    setShowSubmit(!showSubmit);
    console.log(email);
  }

  return (
    <>
      <main className="h-screen w-screen flex justify-center items-center bg-[#36384e]">
        {showSubmit ? (
          <Submit toggleSubmit={toggleSubmit} email={email} />
        ) : (
          <div className="h-screen w-screen md:h-2/3 md:w-2/3 md:rounded-3xl flex flex-col md:flex-row-reverse md:justify-start gap-6 md:p-5 bg-white">
            <HeroImage />
            <div className="flex flex-col gap-4 md:gap-7 md:w-1/2 px-4 md:px-6 md:my-auto">
              <h1 className="text-3xl md:text-5xl font-robotoBold">
                Stay updated!
              </h1>
              <p>Join 60,000+ product managers receiving monthly updates on:</p>
              <FeatureList />
              <Form toggleSubmit={toggleSubmit} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default App;
