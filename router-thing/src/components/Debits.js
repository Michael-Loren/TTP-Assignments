import React, { useEffect, useState } from "react";

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
                <td>{debit.amount}</td>
                <td>{debit.date}</td>
              </tr>
            ))
          ) : (
            <tr><td>didn't work</td></tr>
          )}
        </tbody>
      </table>
    </>
  );
}
