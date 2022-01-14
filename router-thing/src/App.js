// src/App.js

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Debits from './components/Debits';
import Credits from './components/Credits'

function App() {


const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })
const [totalDebits, setTotalDebits] = useState(0);
const [totalCredits, setTotalCredits] = useState(0);
const [accountBalance, setAccountBalance] = useState(0)
const mockLogIn = (logInInfo) => {
  const newUser = {...currentUser}
  newUser.userName = logInInfo.userName
  setCurrentUser(newUser)
}



    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home accountBalance={accountBalance}/>}/>
            <Route path="/userProfile" element={<UserProfile userName={currentUser.userName} memberSince={currentUser.memberSince}  />}/>
            <Route path="/login" element={<LogIn mockLogIn={mockLogIn}/>}  />
            <Route path="/debits" element={<Debits totalCredits={totalCredits} setTotalCredits={setTotalCredits} totalDebits={totalDebits} setTotalDebits={setTotalDebits} setAccountBalance={setAccountBalance} accountBalance={accountBalance}/>}/>
            <Route path="/credit" element={<Credits totalDebits={totalDebits} setTotalDebits={setTotalDebits} totalCredits={totalCredits} setTotalCredits={setTotalCredits} setAccountBalance={setAccountBalance} accountBalance={accountBalance}/>}/>
          </Routes>
        </BrowserRouter>
    );
  }

export default App;