import React, { Component,useState,useReducer } from 'react'
import {login} from "../utils/login"

function loginReducer(state,action){
    switch(action.type){
        case "login":{
            return {
            ...state,
            isLoading:true,
            error:"",
            };

        };
        case "success":{
            return {...state,isLoggedIn:true}
        }
        case "error":{
            return {...state,
                error:"Incorrect username or password",
                isLoading:false,
                username:"",
                password:""}
        }
        case "logout":{
            return {
                ...state,
                isLoggedIn:false,
                username:"",
                password:"",
            }
        }

        case "field":{return {
            ...state,
            [action.field]:action.value,
        }}
        default:
            break;


    }
    return state;
}

const initalState={
username:"",
password:"",
error:"",
isLoading:false,
isLoggedIn:false,
}
export default function LoginPlainReducer(){
    const [state,dispatch]=useReducer(loginReducer,initalState)

    const {username,password,error,isLoading,isLoggedIn}=state


    const onSubmit=async e=>{
        e.preventDefault();
        dispatch({type:"login"})
        try{
            await login({username,password})
            dispatch({type:"success"})
        }catch(error){
            dispatch({type:"error"})
        }
    }
    return (<div className='App'>
        <div className='login-container'>
            {isLoggedIn?
            <> 
            <h1>Hello {username}</h1>
            <button onClick={()=>dispatch({type:"logout"})}>LogOut</button>
            </>
            
            :
        <form className='form' onSubmit={onSubmit}>
            {error && <p className='error'>{error}</p>}
        <p>Please Login</p>
        <input type="text" placeholder="username" value={username} onChange={e=>dispatch({type:'field',field:'username',value:e.currentTarget.value})}/>
        <input type="password" placeholder="password" vlaue={password} onChange={e=>dispatch({type:'field',field:'password',value:e.currentTarget.value})}/>
        <button className='submit' disabled={isLoading}>
            {isLoading?"Loagging in ..." :"Log In"}
            </button>
        </form>
}
        </div>
    </div>)
}