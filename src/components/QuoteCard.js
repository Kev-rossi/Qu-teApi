import React from "react"

const QuoteCard = (props) =>{
  return(
    <div>
      <p>{props.quoteSimpson.quote}</p>
      <h3>{props.quoteSimpson.character}</h3>
      <img src = {props.quoteSimpson.image} alt = "image Simpson" />
      <p>{props.quoteSimpson.characterDirection}</p>
    </div>
  )}
export default QuoteCard