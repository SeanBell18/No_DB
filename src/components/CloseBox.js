import React from 'react'

export default function CloseBox(props) {
    const {toggleButton} = props
    return (
    <button onClick={toggleButton}>{props.str}</button>
    )
}