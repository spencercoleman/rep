import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import GlobalStyle from "./styles/GlobalStyle";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import MainLayoutRoutes from "./layouts/MainLayoutRoutes";
import ScrollToTop from "./layouts/ScrollToTop";

function App() {
  const {user} = useAuthContext();
  const [showForm, setShowForm] = useState(false);
  
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route 
            path="/signup" 
            element={!user ? <Signup /> : <Navigate to="/" />} />
          <Route 
            path="/login" 
            element={!user ? <Login /> : <Navigate to="/" />} />
          <Route 
            path="*" 
            element={user ? <MainLayoutRoutes showForm={showForm} setShowForm={setShowForm} /> : <Navigate to="/login" />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
