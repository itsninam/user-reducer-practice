import Task from "./Task";

const TaskList = ({ state }) => {
  return (
    <ul>
      {state.tasks.map((task, index) => {
        return <Task task={task} key={index} />;
      })}
    </ul>
  );
};

export default TaskList;
