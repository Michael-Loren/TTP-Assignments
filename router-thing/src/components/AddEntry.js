import React from "react";

export default function AddEntry(props) {

    const {descText, amountText, onSubmit} = props;

   

  return (
    <>
      <form>
        <input type="text" placeholder="Description"></input>
        <input type="number" placeholder="Amount"></input>
        <button type="submit">Add</button>
      </form>
    </>
  );
}
