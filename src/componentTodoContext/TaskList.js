
import { useTasks } from './TasksContext.js';

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {task.text}
        </li>
      ))}
    </ul>
  );
}