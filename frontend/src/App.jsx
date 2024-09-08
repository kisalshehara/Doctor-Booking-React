import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; 
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appoinment from './pages/Appointment';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:specificity" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appoinmnets" element={<MyAppointments />} />
        <Route path="/appoinmnet/:docID" element={<Appointment />} />
        

      </Routes>
    </div>
  );
}

export default App;
