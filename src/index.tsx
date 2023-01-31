import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/style.scss';

import {BrowserRouter, Routes, Route, Navigate, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';
import JobDetail from './pages/JobDetail/JobDetail';
import JobList from './pages/JobList/JobList';
import Profile from './pages/Profile/Profile';
import LoginTemplate from './templates/LoginTemplate/LoginTemplate';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import JobType from './pages/JobType/JobType';
import AdminTemplate from './templates/AdminTemplate/AdminTemplate';
import AdminHome from './pages/AdminPage/AdminHome/AdminHome';
import UserManager from './pages/AdminPage/UserManager/UserManager';
import JobManager from './pages/AdminPage/JobManager/JobManager';
import JobTypeManager from './pages/AdminPage/JobTypeManager/JobTypeManager';
import ServiceManager from './pages/AdminPage/ServiceManager/ServiceManager';
import { Provider } from 'react-redux'
import { store } from './redux/configStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path='detail' element={<JobDetail />} />
          <Route path='result'>
            <Route path=':keyword' element={<JobList />} /> 
          </Route>
          <Route path='category'>
            <Route path=':id' element={<JobList />} />
          </Route>
          <Route path='profile' element={<Profile />} />
          <Route path='type'>
            <Route path=':id' element={<JobType />} />
          </Route>
          <Route path='*' element={<Navigate to='/'/>} />
        </Route>
        <Route path='users' element={<LoginTemplate />}>
          <Route index element={<Login />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>
        <Route path='admin' element={<AdminTemplate />} >
          <Route index element={<AdminHome />} />
          <Route path='users' element={<UserManager />} />
          <Route path='job' element={<JobManager />} />
          <Route path='jobtype' element={<JobTypeManager />} />
          <Route path='service' element={<ServiceManager /> } />
          <Route path='*' element={<Navigate to='/admin' />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);


