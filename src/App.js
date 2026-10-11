import { useState } from 'react';
import './App.css';
import TaskItem from './components/TaskItem';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false },
  ]);
  return (
    <>
    {tasks.map((task) => (
      <TaskItem key={task.id} task={task}/>
    ))}
    </>
  );
};

export default App;
