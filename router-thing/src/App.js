// src/App.js

import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import LogIn from "./components/Login";
import Debits from "./components/Debits";
import Credits from "./components/Credits";

function App() {
  const [currentUser, setCurrentUser] = useState({
    userName: "bob_loblaw",
    memberSince: "08/23/99",
  });
  const [totalDebits, setTotalDebits] = useState(20);
  const [debits, setDebits] = useState([]);
  const [credits, setCredits] = useState([])

  const [totalCredits, setTotalCredits] = useState(0);
  const [accountBalance, setAccountBalance] = useState(
    totalCredits - totalDebits
  );
  const mockLogIn = (logInInfo) => {
    const newUser = { ...currentUser };
    newUser.userName = logInInfo.userName;
    setCurrentUser(newUser);
  };

  async function getDebits() {
    try {
      const response = await fetch("https://moj-api.herokuapp.com/debits");
      const data = await response.json();
      setDebits(data);

      let total = 0;
      data.map((entry) => (total += entry.amount));
      setTotalDebits(total);

      setAccountBalance(totalCredits - totalDebits); //update account balance
      console.log(totalDebits);
    } catch (e) {
      console.log(e);
    }
  }
  async function getCredits() {
    try {
      const response = await fetch("https://moj-api.herokuapp.com/credits");
      const data = await response.json();
      setCredits(data);

      let total = 0;
      data.map((entry) => (total += entry.amount));
      setTotalCredits(total);
      setAccountBalance(totalCredits - totalDebits); //update account balance
      console.log(totalCredits);

    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getDebits();
    getCredits();
  }, [totalDebits, totalCredits]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home accountBalance={accountBalance} />} />
        <Route
          path="/userProfile"
          element={
            <UserProfile
              userName={currentUser.userName}
              memberSince={currentUser.memberSince}
            />
          }
        />
        <Route path="/login" element={<LogIn mockLogIn={mockLogIn} />} />
        <Route
          path="/debits"
          element={
            <Debits
              debits={debits}
              setDebits={setDebits}
              totalCredits={totalCredits}
              setTotalCredits={setTotalCredits}
              totalDebits={totalDebits}
              setTotalDebits={setTotalDebits}
              setAccountBalance={setAccountBalance}
              accountBalance={accountBalance}
            />
          }
        />
        <Route
          path="/credit"
          element={
            <Credits
              credits={credits}
              setCredits={setCredits}
              totalDebits={totalDebits}
              setTotalDebits={setTotalDebits}
              totalCredits={totalCredits}
              setTotalCredits={setTotalCredits}
              setAccountBalance={setAccountBalance}
              accountBalance={accountBalance}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
