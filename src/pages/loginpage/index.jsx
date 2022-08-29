/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useState } from "react";
import './styles.css'

const loginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassoword] = useState("")

  const handleSubmit = (event) =>{
    event.preventDefault()
    console.log('submit', {email, password})
  } 
  
  return (



  <div id="login">
    <h1 className="title">Login do Sistema</h1>
    <form  className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="email" >Email</label>
        <input type="email" className="email" id="email" value={email} onChange = {(event)=> setEmail(event.target.value)}/>
      </div>
      <div className="field">
        <label htmlFor="password" >Senha</label>
        <input type="password" className="password"  id="password" value= {password} onChange = {(event)=> setPassoword(event.target.value)}/>
        </div>
        <div className="actions">
          <button type="submit">Entrar</button>
        </div>
    </form>
  </div>


  )
}

export default loginPage