import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import MainPage from './pages/main/MainPage';
import DocumentsPage from './pages/documents/DocumentsPage';
import EmployeesPage from './pages/employees/employeesPage/EmployeesPage';
import CreateEmployees from './pages/employees/createEmployeesPage/CreateEmployeesPage';
import UpdateEmployee from './pages/employees/updateEmployeesPage/UpdateEmployeePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/documents' element={<DocumentsPage/>}/>
            <Route path='/employees' element={<EmployeesPage/>}/>
            <Route path='/employees/createEmployee' element={<CreateEmployees/>}/>
            <Route path='/updateEmployee' element={<UpdateEmployee/>}/>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;