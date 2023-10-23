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
      id: 0,
      taskName: "shopping",
    },
    {
      id: 1,
      taskName: "cleaning",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_task": {
      const newTask = {
        id: Math.random(),
        taskName: action.payload,
      };

      return {
        ...state,
        tasks: [...state.tasks, newTask],
      };
    }

    case "remove_task": {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    }

    case "edit_task": {
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          return task.id === action.payload.id
            ? { ...task, taskName: action.payload.taskName }
            : task;
        }),
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

  const handleRemoveTask = (task) => {
    dispatch({ type: "remove_task", payload: task.id });
  };

  const handleEditTask = (editTask) => {
    dispatch({ type: "edit_task", payload: editTask });
  };

  return (
    <div className="App">
      <Input handleSubmitTask={handleSubmitTask} />

      <TaskList
        state={state}
        handleRemoveTask={handleRemoveTask}
        handleEditTask={handleEditTask}
      />
    </div>
  );
}

export default App;
