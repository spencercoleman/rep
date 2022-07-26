import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Navbar from "./components/Navbar";
import Home from './pages/Home';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<h2>Exercises Route</h2>} />
            <Route path="/exercises/:id" element={<h2>Exercise Route</h2>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
