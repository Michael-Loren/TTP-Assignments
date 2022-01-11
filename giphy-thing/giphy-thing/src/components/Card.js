import React from 'react'

export default function Card(props) {
    
console.log(props.data);
    return (
        <div>
            <img src={props.data.images.downsized.url}></img>
        </div>
    )
}
