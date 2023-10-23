import { useState } from "react";

const Input = ({ handleSubmitTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };
  return (
    <form
      onSubmit={(event) => {
        handleSubmitTask(event, userInput);
        setUserInput("");
      }}
    >
      <input value={userInput} onChange={handleUserInput} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
