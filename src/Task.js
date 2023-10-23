const Task = ({ task, handleRemoveTask }) => {
  return (
    <li>
      <span>{task.taskName}</span>
      <button>Edit</button>
      <button onClick={() => handleRemoveTask(task)}>Delete</button>
    </li>
  );
};

export default Task;
