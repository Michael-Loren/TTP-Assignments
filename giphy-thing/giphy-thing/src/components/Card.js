import React from 'react'

export default function Card(props) {
    
console.log(props.url);
    return (
        <div>
            <img src={props.url.images.downsized_medium.url}></img>
        </div>
    )
}
