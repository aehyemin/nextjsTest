"use client";

import {useState} from 'react';

export default function TodoList({ initialTodos}: {initialTodos: string[]}) {
  const [todos, setTodos] = useState<string[]>(initialTodos);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="w-80 bg-white shadow-md rounded p-4">
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력하세요.."
          className="border p-2 rounded text-black"
          />
          <button onClick={addTodo} className="bg-blue-500 text-gray px-4 py-2 rounded">
            추가
          </button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="flex text-black justify-between items-center p-2 border-b">
            {todo}
            <button onClick={() => removeTodo(index)} className="text-red-500">
              삭제
            </button>
          </li>
        ))}
      </ul>
      </div>
  );
}