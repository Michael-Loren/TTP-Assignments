import React from "react";

export default function AddEntry(props) {

    const {setAmountText, setDescText, onSubmit} = props;

    

    
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={(e) => setDescText(e.target.value)} type="text" placeholder="Description"></input>
        <input onChange={(e) => setAmountText(parseInt(e.target.value))} type="number" placeholder="Amount"></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
