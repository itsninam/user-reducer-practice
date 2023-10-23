import { useReducer } from "react";
import "./App.css";

const initialValue = {
  name: "Anne",
  age: 25,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        age: state.age + 1,
      };
    }

    case "decrement": {
      return {
        ...state,
        age: state.age - 1,
      };
    }

    case "change_name": {
      return {
        ...state,
        name: action.payload,
      };
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <input
        value={state.name}
        onChange={(event) =>
          dispatch({ type: "change_name", payload: event.target.value })
        }
      />

      <div>
        <span>
          {state.name}, {state.age} years old
        </span>
      </div>

      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
    </div>
  );
}

export default App;
