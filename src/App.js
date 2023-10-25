import { useReducer } from "react";
import "./App.css";
import UserList from "./UserList";
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
  users: [
    {
      id: 0,
      firstName: "Bob",
      lastName: "Roy",
    },
    {
      id: 1,
      firstName: "Jane",
      lastName: "Doe",
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add_user": {
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: Math.random(),
            firstName: action.payload.firstName,
            lastName: action.payload.lastName,
          },
        ],
      };
    }

    case "delete_user": {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    }

    case "edit_user": {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
            ? {
                ...user,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
              }
            : user
        ),
      };
    }
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleAddUser = (event, userInput) => {
    event.preventDefault();
    console.log(userInput);

    dispatch({ type: "add_user", payload: userInput });
  };

  const handleDeleteUser = (user) => {
    dispatch({ type: "delete_user", payload: user.id });
  };

  const handleEditUser = (user) => {
    console.log(user);
    dispatch({ type: "edit_user", payload: user });
  };

  return (
    <div className="App">
      <Input handleAddUser={handleAddUser} state={state} />

      <UserList
        state={state}
        handleDeleteUser={handleDeleteUser}
        handleEditUser={handleEditUser}
      />
    </div>
  );
}

export default App;
