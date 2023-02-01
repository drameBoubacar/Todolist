import './App.css';
import React, {useState} from 'react'
import List from './components/List';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodo] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleClick = (inputValue) => {
    setTodo([...todos, inputValue]);
  }
  return (
    <div className="App">
      <h1>TodoList</h1>
      <input type="text" onChange={handleInputValue}/>
      <button onClick={() => handleClick(inputValue)}>Create Todo</button>
      <List todos={todos}/>
    </div>
  );
}

export default App;
