import React from 'react'

export default function Input({name="", type='', placeholder="", onChange = (e) => { },onBlur ={}, value=''}) {

  return (
    <div>
        <input name={name} type={type} placeholder={placeholder}  onChange={onChange} onBlur={onBlur} value={value}/>
    </div>
  )
}
