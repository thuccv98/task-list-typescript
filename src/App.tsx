import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { ITodo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = () => {};

  console.log(todo);

  return (
    <div className="App">
      <span className="heading">Task-List</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
