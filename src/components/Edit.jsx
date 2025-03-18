import React from 'react'

function Edit ({onClick,className="",text}){
  return (
    <div>
    <button className="rounded-md bg-slate-800 py-4 px-8 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2" type="button" onClick={onClick}>{text}</button>
    </div>
  )
}

export default Edit