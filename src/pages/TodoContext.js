import AddTask from "../componentTodoContext/AddTask.js";
import TaskList from "../componentTodoContext/TaskList.js";
import { TasksProvider } from "../componentTodoContext/TasksContext.js";

export default function TodoContext() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
      </TasksProvider>
  );
}
