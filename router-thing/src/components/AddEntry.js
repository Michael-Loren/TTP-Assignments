import React from 'react'

export default function AddEntry() {
    return (
        <>
            <form>
                <input type="text" placeholder="Description"></input>
                <input type="text" placeholder="Amount"></input>
                <button type="submit">Add</button>
                </form>
        </>
    )
}
