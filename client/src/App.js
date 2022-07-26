import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<h2>Exercises Route</h2>} />
          <Route path="/exercises/:id" element={<h2>Exercise Route</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
