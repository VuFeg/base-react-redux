import './App.scss';
import Header from './components/Header/Header';
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      Test Link
      <button>
        <Link to="/Users">Go to page user</Link>
      </button>
      <button>
        <Link to="/Admins">Go to page admin</Link>
      </button>
    </div>
  );
}

export default App;
