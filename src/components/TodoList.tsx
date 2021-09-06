import React from 'react';
import { ITodo } from '../model';
import SingleTodo from './SingleTodo';
import './styles.css';

interface IProps {
  todos: ITodo[];
  setTodos: React.Dispatch<React.SetStateAction<ITodo[]>>;
}

const TodoList = ({ todos, setTodos }: IProps) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Task List</span>
        {todos.length > 0 ? (
          todos
            .map((todo) => (
              <SingleTodo
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))
            .reverse()
        ) : (
          <span style={{ paddingTop: '15px' }}>Task is empty</span>
        )}
      </div>
    </div>
  );
};

export default TodoList;
