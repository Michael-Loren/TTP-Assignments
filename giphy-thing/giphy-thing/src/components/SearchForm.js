import React from 'react'

export default function SearchForm(props) {
    
    return (
        <div>
            <input type="text" onChange = {props.onChange} placeholder="Enter something"></input>
        </div>
    )
}
