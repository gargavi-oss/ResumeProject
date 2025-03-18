import React from 'react'

function Button({onClick,text,className=""}) {
  return (
   
    <button
    className="rounded-md bg-rose-500 py-0.5 px-1 border border-transparent text-center text-xs text-white transition-all shadow-md hover:shadow-lg focus:bg-rose-400 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button"
    onClick={onClick}
  >
    {text}
  </button>
       
  )
}

export default Button