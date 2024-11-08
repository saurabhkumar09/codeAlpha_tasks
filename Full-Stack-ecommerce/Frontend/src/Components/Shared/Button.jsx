import React from 'react'

const Button = ({bgColor, textColor, text, smallSize}) => {
  return (
    <div>
        <button className={`${bgColor} ${textColor} ${smallSize} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}>{text}
        </button>
    </div>
  )
}

export default Button