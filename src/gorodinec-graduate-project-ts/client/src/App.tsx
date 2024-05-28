import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
// import DocumentsPage from './pages/documents/documentsPage/DocumentsPage';
import EmployeesPage from './pages/employees/EmployeesPage';

import Contract from './pages/documents/contractPage/ContractPage';
import UploadingFile from './pages/documents/uploadingFilePage/UploadingFilePage';
import UpdateEmployees from './components/employees/updateEmployees/UpdateEmployeesPage';
import PDFServiceNote from './pages/documents/serviceNotePage/PDFServiceNote';

import ServiceNotePage from './pages/documents/serviceNotePage/ServiceNotePage';
import CreateServiceNote from './pages/documents/serviceNotePage/CreateServiceNotePage';
import EmploymentContractPage from './pages/documents/employmentContractPage/EmploymentContractPage';
import CreateEmploymentContract from './pages/documents/employmentContractPage/CreateEmploymentContractPage';
import ReferenceBook from './pages/referenceBook/ReferenceBook';
import Counterparties from './pages/counterparties/CounterpartiesPage';
import PDFEmploymentContract from './pages/documents/employmentContractPage/PDFEmploymentContract';







function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            {/* Документы */}
            {/* <Route path='/documents' element={<DocumentsPage/>}/> */}

            {/* Трудовой договор */}
            <Route path='/documents' element={<EmploymentContractPage/>}/>
            <Route path='/documents/createDocument/employmentContract' element={<CreateEmploymentContract/>}/>
            <Route path='/documents/createDocument/employmentContract/pdf/:id' element={<PDFEmploymentContract/>}/>

            {/* Служебная записка */}
            <Route path='/documents/serviceNote' element={<ServiceNotePage/>}/>
            <Route path='/documents/createDocument/serviceNote' element={<CreateServiceNote/>}/>
            <Route path='/documents/createDocument/serviceNote/pdf/:id' element={<PDFServiceNote/>}/> 

            {/* Договор */}
            <Route path='/documents/createDocument/contract' element={<Contract/>}/>
            <Route path='/documents/createDocument/file' element={<UploadingFile/>}/>

            <Route path='/counterparties' element={<Counterparties/>}/>


            {/* Сотрудники */}
            <Route path='/employees' element={<EmployeesPage/>}/>
            {/* <Route path='/employees/updateEmployee/:id' element={<UpdateEmployees/>}/> */}

            <Route path='/referenceBook' element={<ReferenceBook/>}/>
            
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;