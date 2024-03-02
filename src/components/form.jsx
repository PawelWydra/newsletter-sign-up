import { useState } from "react";

function Form({ toggleSubmit }) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  function handleChange(event) {
    setEmail(event.target.value);
    if (event.target.value === "") {
      setIsValid(true);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValidEmail(email)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    toggleSubmit(email);
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <div className="flex justify-between">
        <label className="font-robotoBold text-xs" htmlFor="email">
          Email address
        </label>
        {!isValid && (
          <p className="text-red-500 text-xs">Valid email required.</p>
        )}
      </div>
      <input
        className={`p-4 rounded-lg ring-1 ring-gray-300 hover:cursor-pointer ${
          !isValid && "ring-red-500 bg-red-100"
        }`}
        type="text"
        placeholder="email@company.com"
        value={email}
        onChange={handleChange}
      />

      <button
        className="w-full h-14 mx-auto mt-4 text-white bg-[#242742] rounded-lg hover:cursor-pointer hover:bg-gradient-to-r hover:from-rose-500 hover:to-[#ff6257]"
        type="submit"
      >
        Subscribe for monthly newsletter
      </button>
    </form>
  );
}

export default Form;
