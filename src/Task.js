const Task = ({ task }) => {
  return (
    <li>
      <span>{task.taskName}</span>
      <button>Edit</button>
      <button>Delete</button>
    </li>
  );
};

export default Task;
