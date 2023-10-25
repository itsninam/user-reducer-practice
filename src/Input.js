import { useState } from "react";

const Input = ({ handleAddUser }) => {
  const [userInput, setUserInput] = useState({ firstName: "", lastName: "" });
  return (
    <form
      onSubmit={(event) => {
        handleAddUser(event, userInput);
        setUserInput({ firstName: "", lastName: "" });
      }}
    >
      <input
        placeholder="Enter first name"
        name="firstName"
        value={userInput.firstName}
        onChange={(event) =>
          setUserInput({
            ...userInput,
            [event.target.name]: event.target.value,
          })
        }
      />
      <input
        placeholder="Enter last name"
        name="lastName"
        value={userInput.lastName}
        onChange={(event) =>
          setUserInput({
            ...userInput,
            [event.target.name]: event.target.value,
          })
        }
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
