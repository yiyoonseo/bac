import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function TodosCrudPage() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((res) => setTodos(res.data));
  }, []);

  const handleAdd = async () => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false,
    });
    alert('추가 완료 (Mock)');
    console.log('POST 응답:', res.data);
  };

  const handleToggle = async (id) => {
    const res = await axios.patch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        completed: true,
      }
    );
    alert('완료 처리 (Mock)');
    console.log('PATCH 응답:', res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    alert('삭제 완료 (Mock)');
    console.log('DELETE 완료:', id);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">🛠️ Todo CRUD 실습</h1>

      <Link
        to="/"
        className="text-blue-600 underline hover:text-blue-800 block mb-4"
      >
        ⬅️ 홈으로 돌아가기
      </Link>

      <div className="flex gap-2">
        <input
          className="border px-2 py-1 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="새로운 할 일 입력"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          추가
        </button>
      </div>

      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="border p-3 rounded flex justify-between items-center"
          >
            <span>{todo.title}</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleToggle(todo.id)}
                className="text-green-600 underline"
              >
                완료
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="text-red-600 underline"
              >
                삭제
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
