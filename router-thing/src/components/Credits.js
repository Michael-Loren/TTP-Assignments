import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddEntry from "./AddEntry";
import AccountBalance from "./AccountBalance";

export default function Credits(props) {
  const [credits, setCredits] = useState([]);
  const [descText, setDescText] = useState("");
  const [amountText, setAmountText] = useState(Number);
  const {
    totalDebits,
    setTotalDebits,
    totalCredits,
    setTotalCredits,
    accountBalance,
    setAccountBalance,
  } = props;

  function onSubmit(e) {
    const updateCredits = [...credits];
    updateCredits.push({
      id: "",
      description: descText,
      amount: amountText,
      date: new Date().toISOString(),
    });

    setCredits(updateCredits);
    setTotalCredits(totalCredits + amountText); //add new value
    setAccountBalance(totalCredits - totalDebits); //update account balance
    console.log(updateCredits);
    e.preventDefault();
  }

  return (
    <>
      <h1>Credits</h1>
      <nav>
        <Link to="/">Home</Link> <Link to="/userprofile">User Profile</Link>
      </nav>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {credits && (
            credits.map((credit) => (
              <tr>
                <td>{credit.description}</td>
                <td>${credit.amount}</td>
                <td>{credit.date.slice(0, 10)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <AddEntry
        setAmountText={setAmountText}
        setDescText={setDescText}
        onSubmit={onSubmit}
      />
      <AccountBalance accountBalance={accountBalance} />
    </>
  );
}
