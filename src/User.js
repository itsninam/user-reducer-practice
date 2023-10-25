import { useState } from "react";

const User = ({ user, handleDeleteUser, handleEditUser }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <li>
      {isEdit ? (
        <>
          <input
            value={user.firstName}
            name="firstName"
            onChange={(event) =>
              handleEditUser({
                ...user,
                [event.target.name]: event.target.value,
              })
            }
          />
          <input
            value={user.lastName}
            name="lastName"
            onChange={(event) =>
              handleEditUser({
                ...user,
                [event.target.name]: event.target.value,
              })
            }
          />
        </>
      ) : (
        <span>
          {user.firstName} {user.lastName}
        </span>
      )}

      {isEdit ? (
        <button onClick={() => setIsEdit(false)}>Save</button>
      ) : (
        <button onClick={() => setIsEdit(true)}>Edit</button>
      )}

      <button onClick={() => handleDeleteUser(user)}>Delete</button>
    </li>
  );
};

export default User;
