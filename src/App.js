import './App.css';
import React, {useState} from 'react'
import List from './components/List';
import Header from './components/Header';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodo] = useState([]);

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  }

  const handleClick = (e, inputValue) => {
    setTodo([...todos, inputValue]);
  }
  return (
    <div className="App">
      <Header/>
      <input type="text" onChange={handleInputValue}/>
      <button onClick={() => handleClick(inputValue)}>Create Todo</button>
      <List todos={todos}/>
    </div>
  );
}

export default App;
