import User from "./User";

const UserList = ({ state, handleDeleteUser, handleEditUser }) => {
  if (!state.users.length) {
    return <p>Add User</p>;
  }
  return (
    <ul>
      {state.users.map((user) => {
        return (
          <User
            user={user}
            key={user.id}
            handleDeleteUser={handleDeleteUser}
            handleEditUser={handleEditUser}
          />
        );
      })}
    </ul>
  );
};

export default UserList;
