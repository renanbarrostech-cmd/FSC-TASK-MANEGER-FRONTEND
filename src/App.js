import { useState } from 'react';
import './App.css';

const App = () => {
  const [message, setMessage] = useState("Hello World");

  const handleNewMessage = () => {
    setMessage("Olá Mundo");
  }
  return (
    <>
    <h1>{message}</h1>
    <button onClick={handleNewMessage}>Change Message</button>
    </>
  );
};

export default App;
