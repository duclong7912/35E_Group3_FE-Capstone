import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import JobDetail from './pages/JobDetail/JobDetail';
import JobList from './pages/JobList/JobList';
import Profile from './pages/Profile/Profile';
import LoginTemplate from './templates/LoginTemplate/LoginTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import JobType from './pages/JobType/JobType';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<Home />} />
        <Route path='detail' element={<JobDetail />} />
        <Route path='list' element={<JobList />} />
        <Route path='profile' element={<Profile />} />
        <Route path='type' element={<JobType />} />
        <Route path='*' element={<Navigate to='/'/>} />
      </Route>
      <Route path='users' element={<LoginTemplate />}>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


