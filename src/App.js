import logo from './logo.svg';
import './App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200">
      <h1 className="text-3xl font-bold text-center py-6 text-indigo-700">InstaBoard – Task Manager</h1>
      <Board />
    </div>
  );
}

export default App;
