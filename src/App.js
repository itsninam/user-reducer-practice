import { useReducer, useState } from "react";
import "./App.css";
import TaskList from "./TaskList";
import Input from "./Input";

// const initialValue = {
//   name: "Anne",
//   age: 25,
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment": {
//       return {
//         ...state,
//         age: state.age + 1,
//       };
//     }

//     case "decrement": {
//       return {
//         ...state,
//         age: state.age - 1,
//       };
//     }

//     case "change_name": {
//       return {
//         ...state,
//         name: action.payload,
//       };
//     }
//   }
// };
const initialValue = {
  tasks: [
    {
      taskName: "shopping",
    },
    {
      taskName: "cleaning",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_task": {
      return {
        ...state,
        tasks: [...state.tasks, { taskName: action.payload }],
      };
    }
  }
};
function App() {
  // const [state, dispatch] = useReducer(reducer, initialValue);
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleSubmitTask = (event, userInput) => {
    event.preventDefault();

    dispatch({ type: "add_task", payload: userInput });
  };

  return (
    <div className="App">
      <Input handleSubmitTask={handleSubmitTask} />

      <TaskList state={state} />
    </div>
  );
}

export default App;
