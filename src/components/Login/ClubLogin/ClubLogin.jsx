import React from 'react'
import {useForm} from 'react-hook-form'

export default function ClubLogin() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  let submitForm=(userObj)=>{
    console.log(userObj)
  }
  return (
    <div>Club login</div>
    
  )
}
