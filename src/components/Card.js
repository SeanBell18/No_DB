import React from 'react'

export default function Card (props) {
  const { handleChildClick} = props;
  const { name, length, attributes } =props.dragon
  return (
    <div id="openCard">
      <h1>Name: </h1>
      <p classsName="cardDetails">{name}</p>
      <h1>Length: </h1>
      <p classsName="cardDetails">{length}</p>
      <h1>Attributes: </h1>
      <p classsName="cardDetails">{attributes}</p>
      <p></p>

      <button onClick = {handleChildClick}>Close</button>
    </div>
  )
}  