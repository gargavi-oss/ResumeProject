import React from 'react'

function InputBox({placeHolder,id,type,value,onChange}) {
  return (
    <input 
    type={type}
    className='outline-1 outline-white px-4 py-1 text-white bg-neutral-600 '
    placeholder={placeHolder}
    id = {id}
    value={value}
    onChange={onChange}
  
    />
  )
}

export default InputBox