import React, { Component,useState,useEffect } from 'react';

function useGiphy(query){
    console.log("query.....",query)
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    useEffect(()=>{

        async function fetchData(){
            try{
                setLoading(true)

                const response= await fetch(`https://api.giphy.com/v1/gifs/search?api_key=TF6dQDw5LpBCDDW6BJrMgvpLYIXRvZx6&q=${query}&limit=10&offset=0&rating=g&lang=en`)
                const json=await response.json()
                console.log("in json",json)
                setResults(
                    json.data.map(item=>{
                        return item.images.preview.mp4;
                    }) 
                )
                
            }catch(error){
                console.log("error")
            }finally{
                setLoading(false)
            }
        }

        if (query !==""){
            console.log("calling api ",query)
            fetchData();
        }

    },[query])
    
    return [results,loading]
}




export default function AsyncHooks(){
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("")
    const [results,loading]=useGiphy(query);



    
    function onSubmit(e){
        e.preventDefault();
        console.log("search",search)
        setQuery(search);
    }

    return(
        <div>
            <h1>Async React Hook</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder='Search for Gifs!' onChange={e=>setSearch(e.target.value)}/>
                <button type='submit'>Search</button>
            </form>
            <br/>
            {loading?<h1>Try Loading</h1>:
         
            results.map(item=>(
                <video autoPlay loop key={item} src={item}/>
            ))
        }
        </div>
    )
}
