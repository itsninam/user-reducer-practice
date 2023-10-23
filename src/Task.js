import { useState } from "react";

const Task = ({ task, handleRemoveTask, handleEditTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <li>
      {isEdit ? (
        <input
          value={task.taskName}
          onChange={(event) =>
            handleEditTask({ ...task, taskName: event.target.value })
          }
        />
      ) : (
        <span>{task.taskName}</span>
      )}

      {isEdit ? (
        <button
          onClick={() => {
            setIsEdit(false);
          }}
        >
          Save
        </button>
      ) : (
        <button
          onClick={() => {
            setIsEdit(true);
          }}
        >
          Edit
        </button>
      )}

      <button onClick={() => handleRemoveTask(task)}>Delete</button>
    </li>
  );
};

export default Task;
