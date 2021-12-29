import React from 'react'

const Card: React.FC<{cardContent:string}> = (props) => {
  return (
    <p className="shadow-lg mb-2 rounded-xl p-2 border-gray-50 border-2  dark:bg-gray-600 dark:border-0 dark:border-gray-600">
      {props.cardContent}
    </p>
  )
}

export default Card;