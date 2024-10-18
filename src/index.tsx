import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Home from './home/Home';
import Admin from './admin/Admin';
import Employee from './employee/Employee';
import Management from './admin/management/management';
import ManageEmployees from './admin/management/manageemployees/ManageEmployees';
import Reports from './admin/management/reports/Reports';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/management" element={<Management />} />
        <Route path="/manage-employees" element={<ManageEmployees />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
  </React.StrictMode>
);