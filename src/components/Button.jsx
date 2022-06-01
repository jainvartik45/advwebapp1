import React from 'react'

const Button = ({color,bgcolor,text,borderRadius,size}) => {
  return (
    <div>
      <button 
      type='button'
      style={{backgroundColor:bgcolor , color , borderRadius}}
      className={`text-${size} p-3 hover:drop-shadow-xl`}
      >
       {text}
      </button>
    </div>
  )
}

export default Button