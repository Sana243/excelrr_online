import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import Register from './component/Register';
import UpdateUser from './component/UpdateUser';
import DeleteUser from './component/DeleteUser';
import ProtectedRoute from './component/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        /*<Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/register" element={<Register />} />
        <Route path="/update/:id" element={<UpdateUser />} />
        <Route path="/delete/:id" element={<DeleteUser />} />
      </Routes>
    </Router>
  );
}

export default App;




