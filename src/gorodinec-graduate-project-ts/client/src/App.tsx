import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import MainPage from './pages/main/MainPage';
import DocumentsPage from './pages/documents/documentsPage/DocumentsPage';
import CreateDocumentsPage from './pages/documents/createDocumentsPage/CreateDocumentsPage';
import CreateEmployees from './pages/employees/createEmployeesPage/CreateEmployeesPage';
import EmployeesPage from './pages/employees/employeesPage/EmployeesPage';



function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/documents' element={<DocumentsPage/>}/>
            <Route path='/documents/createDocument' element={<CreateDocumentsPage/>}/>
            <Route path='/employees' element={<EmployeesPage/>}/>
            <Route path='/employees/createEmployee' element={<CreateEmployees/>}/>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;