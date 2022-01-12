import React from 'react'

export default function Card(props) {
    

    return (
        <div>
            <img src={props.data.images.downsized.url}></img>
        </div>
    )
}
