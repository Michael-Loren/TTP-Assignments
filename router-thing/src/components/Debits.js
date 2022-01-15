import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddEntry from "./AddEntry";
import AccountBalance from "./AccountBalance";

export default function Debits(props) {
  const {debits, setDebits} = props;
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
    const updateDebits = [...debits];
    updateDebits.push({
      id: "",
      description: descText,
      amount: amountText,
      date: new Date().toISOString(),
    });

    setDebits(updateDebits);
    setTotalDebits(totalDebits + amountText); //add new value
    setAccountBalance(totalCredits - totalDebits); //update account balance
    console.log("Hello");
    e.preventDefault();
  }

  return (
    <>
      <h1>Debits</h1>
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
          {debits && (
            debits.map((debit) => (
              <tr>
                <td>{debit.description}</td>
                <td>${debit.amount}</td>
                <td>{debit.date.slice(0, 10)}</td>
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
