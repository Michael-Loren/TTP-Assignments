import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddEntry from "./AddEntry";
import AccountBalance from './AccountBalance';

export default function Credits(props) {
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [descText, setDescText] = useState("");
  const [amountText, setAmountText] = useState(Number);

  async function getCredits() {
    try {
      const response = await fetch("https://moj-api.herokuapp.com/credits");
      const data = await response.json();
      setCredits(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  function onSubmit(e) {
    const updateCredits = [...credits];
    updateCredits.push({
      id: "",
      description: descText,
      amount: amountText,
      date: new Date().toISOString(),
    });

    setCredits(updateCredits);
    console.log(updateCredits);
    e.preventDefault();
  }

  useEffect(() => {
    getCredits();
  }, []);

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
          {!loading ? (
            credits.map((Credits) => (
              <tr>
                <td>{Credits.description}</td>
                <td>${Credits.amount}</td>
                <td>{Credits.date.slice(0, 10)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>didn't work</td>
            </tr>
          )}
        </tbody>
      </table>
      <AddEntry
        setAmountText={setAmountText}
        setDescText={setDescText}
        onSubmit={onSubmit}
      />
      <AccountBalance accountBalance={props.accountBalance}/>
    </>
  );
}
