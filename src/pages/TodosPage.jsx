// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// export default function TodosPage() {
//   const [todos, setTodos] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         setIsLoading(true);
//         const res = await axios.get(
//           'https://jsonplaceholder.typicode.com/todos'
//         );
//         setTodos(res.data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchTodos();
//   }, []);

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-2">📋 Todos</h1>

//       <Link
//         to="/"
//         className="text-blue-600 underline hover:text-blue-800 block mb-4"
//       >
//         ⬅️ 홈으로 돌아가기
//       </Link>

//       {isLoading && <p className="text-gray-600">로딩 중...</p>}
//       {error && <p className="text-red-500">에러 발생: {error}</p>}
//       {!isLoading && !error && (
//         <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-auto">
//           {JSON.stringify(todos.slice(0, 5), null, 2)}
//         </pre>
//       )}
//     </div>
//   );
// }

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Link } from 'react-router-dom';

const fetchTodos = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  return res.data;
};

export default function TodosPage() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    staleTime: 1000 * 60 * 5, // 5분간 fresh 처리
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">📋 Todos</h1>

      <Link
        to="/"
        className="text-blue-600 underline hover:text-blue-800 block mb-4"
      >
        ⬅️ 홈으로 돌아가기
      </Link>

      {isLoading && <p className="text-gray-600">로딩 중...</p>}
      {isError && <p className="text-red-500">에러 발생: {error.message}</p>}
      {!isLoading && !isError && (
        <pre className="bg-gray-100 p-4 rounded text-sm text-gray-800 overflow-auto">
          {JSON.stringify(data.slice(0, 5), null, 2)}
        </pre>
      )}
    </div>
  );
}
