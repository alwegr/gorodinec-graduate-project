import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout';
import { DocumentsPages } from './pages/Documents/DocumentsPages';
import { EmployeePages } from './pages/Employees/EmployeePages';
import { MainPages } from './pages/Main/MainPages';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<MainPages/>}/>
          <Route path='documents' element={<DocumentsPages/>}/>
          <Route path='employee' element={<EmployeePages/>}/>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
