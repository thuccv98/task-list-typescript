import React, { useRef } from 'react';
import './styles.css';

interface IProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container">
      <form
        className="input"
        // Khi submit sẽ làm 2 việc: một là handleAdd, hai là blur đi cái hiệu ứng khi focus input__box
        // sử dụng useRef
        onSubmit={(e) => {
          handleAdd(e);
          inputRef.current?.blur();
        }}
      >
        <input
          ref={inputRef}
          type="input"
          placeholder="Enter a task"
          className="input__box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input__submit" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputField;
