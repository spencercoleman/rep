import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MainLayoutRoutes from "./layouts/MainLayoutRoutes";

function App() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<MainLayoutRoutes showForm={showForm} setShowForm={setShowForm} />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
