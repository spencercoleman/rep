import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Workouts from "./pages/Workouts";
import Exercises from "./pages/Exercises";
import Exercise from "./pages/Exercise";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/workouts/:id" element={<h2>Workout route</h2>} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/exercises/:id" element={<Exercise />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
