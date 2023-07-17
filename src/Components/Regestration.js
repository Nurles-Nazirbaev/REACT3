import React, { useState } from 'react'
import './Regestration.css'

const Regestration = (props) => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [name, setName] = useState("")

    function emailValue(e){
        setEmail(e.target.value)
    } 
    function passValue(e){
        setPass(e.target.value)
    }
    function nameValue(e){
        setName(e.target.value)
    }


    function addData(e){
        e.preventDefault()
        setEmail('')
        setPass('')

        const obj = {
            name: name,
            email: email,
            pass: pass
        }
        props.onSubmit(obj)
    }
  return (
    <form>
        <h2>Regestration</h2>
        <input placeholder='email' type='text' value={email} onChange={emailValue}/>
        <input placeholder='name' type='text' value={name} onChange={nameValue}/>
        <input placeholder='password' type='password' value={pass} onChange={passValue}/>
        <button type='submit' className='nextBtn' onClick={addData}>next</button>
    </form>
  )
}

export default Regestration
