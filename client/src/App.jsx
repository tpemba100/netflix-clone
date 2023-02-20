import "./App.scss";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";


function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Routes>
        <Route path="/" 
        // element={<Home />}
        element={user ? <Home /> : <Navigate to="/register"/>} 
        />
        <Route path="/register" 
        // element={<Register />}
        element={!user ? <Register /> : <Navigate to="/" />} 
        />
        <Route exact path="/login"
        // element={<Login />} 
        element={!user ? <Login /> : <Navigate to="/" />} 
        />

       {/* only disply these routes when user is true */}
        { user && (
        <>
          <Route path="/movies" element={<Home type="movie" />} />
          <Route path="/series" element={<Home type="series" />} />
          <Route path="/watch" element={<Watch />} />
        </>
        )} 
      </Routes>
    </div>
  );
}

export default App;
