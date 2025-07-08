import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-2">🏠 Home</h1>
      <Link
        to="/todos-crud"
        className="text-blue-600 underline hover:text-blue-800"
      >
        ➡️ Todos Crud 페이지로 이동
      </Link>
      <br />
      <Link to="/todos" className="text-blue-600 underline hover:text-blue-800">
        ➡️ Todos 페이지로 이동
      </Link>
    </div>
  );
}
