import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TodosPage from './pages/TodosPage';
import TodosCrudPage from './pages/TodosCrudPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="/todos-crud" element={<TodosCrudPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
