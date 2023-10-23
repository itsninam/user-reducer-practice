import Task from "./Task";

const TaskList = ({ state, handleRemoveTask, handleEditTask }) => {
  if (!state.tasks.length) {
    return <p>Add a task</p>;
  }

  return (
    <ul>
      {state.tasks.map((task) => {
        return (
          <Task
            task={task}
            key={task.id}
            handleRemoveTask={handleRemoveTask}
            handleEditTask={handleEditTask}
          />
        );
      })}
    </ul>
  );
};

export default TaskList;
