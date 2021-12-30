import React, { Component,useState } from 'react'
import {login} from "../utils/login"


export default function LoginPlain(){

    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const [isLoggedIn,setIsLoggedIn]=useState(false)

    const onSubmit=async e=>{
        e.preventDefault();
        // alert("todo")
        setIsLoading(true)
        setError("")
        try{
            await login({username,password})
            setIsLoggedIn(true)
        }catch(error){
            setError("Incorrect username or password")
        }
        setIsLoading(false)
    }
    return (<div className='App'>
        <div className='login-container'>
            {isLoggedIn?
            <> 
            <h1>Hello {username}</h1>
            <button onClick={()=>setIsLoggedIn(false)}>LogOut</button>
            </>
            
            :
        <form className='form' onSubmit={onSubmit}>
            {error && <p className='error'>{error}</p>}
        <p>Please Login</p>
        <input type="text" placeholder="username" value={username} onChange={e=>setUsername(e.currentTarget.value)}/>
        <input type="password" placeholder="password" vlaue={password} onChange={e=>setPassword(e.currentTarget.value)}/>
        <button className='submit' disabled={isLoading}>
            {isLoading?"Loagging in ..." :"Log In"}
            </button>
        </form>
}
        </div>
    </div>)
}