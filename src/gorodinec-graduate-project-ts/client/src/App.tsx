import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import DocumentsPage from './pages/documents/documentsPage/DocumentsPage';
import EmployeesPage from './pages/employees/EmployeesPage';
import ServiceNotePage from './pages/documents/serviceNotePage/ServiceNotePage';
import EmploymentСontract from './pages/documents/employmentСontractPage/EmploymentСontractPage';
import Contract from './pages/documents/contractPage/ContractPage';
import UploadingFile from './pages/documents/uploadingFilePage/UploadingFilePage';
import UpdateEmployees from './components/employees/updateEmployees/UpdateEmployeesPage';
import PDFServiceNote from './pages/documents/serviceNotePage/PDFServiceNote';






function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            {/* Документы */}
            <Route path='/documents' element={<DocumentsPage/>}/>
            <Route path='/documents/createDocument/contract' element={<Contract/>}/>
            <Route path='/documents/createDocument/serviceNote' element={<ServiceNotePage/>}/>
            <Route path='/documents/createDocument/employmentContract' element={<EmploymentСontract/>}/>
            <Route path='/documents/createDocument/file' element={<UploadingFile/>}/>
            <Route path='/documents/createDocument/serviceNote/pdf/:id' element={<PDFServiceNote/>}/>

            {/* Сотрудники */}
            <Route path='/employees' element={<EmployeesPage/>}/>
            <Route path='/employees/updateEmployee/:id' element={<UpdateEmployees/>}/>
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;