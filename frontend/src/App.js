import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Error404Page } from './pages/Error404Page';
import { HomeAdminPage } from './pages/HomeAdminPage';
import { HomeAlumnoPage } from './pages/HomeAlumnoPage';
import { HomeDocentePage } from './pages/HomeDocentePage';
import { HomePage } from './pages/HomePage';
import { WelcomePage } from './pages/WelcomePage';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/welcome' element={<WelcomePage />} />
          <Route exact path='/alumno' element={<HomeAlumnoPage />} />
          <Route exact path='/docente' element={<HomeDocentePage />} />
          <Route exact path='/administrativo' element={<HomeAdminPage />} />
          <Route exact path='*' element={<Error404Page />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
