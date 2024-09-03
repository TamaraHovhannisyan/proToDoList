export const Stats = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const inProgressTasks = tasks.filter(
    (task) => task.status === "in progress"
  ).length;
  const unstartedTasks = tasks.filter(
    (task) => task.status === "unstarted"
  ).length;

  return (
    <div>
      <p>Stats</p>
      <p>
        Completed: {completedTasks}/{totalTasks}
      </p>
      <p>
        In Progress: {inProgressTasks}/{totalTasks}
      </p>
      <p>
        Unstarted: {unstartedTasks}/{totalTasks}
      </p>
    </div>
  );
};
