// src/App.js

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';

function App() {

const [accountBalance, setAccountBalance] = useState(14568.27)
const [currentUser, setCurrentUser] = useState({ userName: "bob_loblaw", memberSince: '08/23/99' })
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
          </Routes>
        </BrowserRouter>
    );
  }

export default App;