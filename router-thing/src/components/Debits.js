import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddEntry  from "./AddEntry";
export default function Debits() {
  const [debits, setDebits] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getDebits() {
    try {
      const response = await fetch("https://moj-api.herokuapp.com/debits");
      const data = await response.json();
      setDebits(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getDebits();
  }, []);

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
          {!loading ? (
            debits.map((debit) => (
              <tr>
                <td>{debit.description}</td>
                <td>${debit.amount}</td>
                <td>{debit.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td>didn't work</td>
            </tr>
          )}
        </tbody>
      </table>
      <AddEntry />
    </>
  );
}
