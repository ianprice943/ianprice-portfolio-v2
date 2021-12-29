import React from 'react'

const Card: React.FC<{cardContent:string}> = (props) => {
  return (
    <p className="shadow-md mb-2 rounded-xl p-2">
      {props.cardContent}
    </p>
  )
}

export default Card;