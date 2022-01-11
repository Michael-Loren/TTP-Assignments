import React from 'react'

export default function SearchForm(props) {
    
    return (
        <div>
            <form>
            <input type="text" onChange={props.onChange} placeholder="Enter something"></input> <button type="submit" onClick={props.onClick}>Search</button>
            </form>
        </div>
    )
}
