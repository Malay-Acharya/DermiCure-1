import React,{useState,useEffect}  from 'react';
import {Card} from './Card';


export const Print = ()=>
{
    const  [initial, setInitial] = useState([])

useEffect(()=>{
fetch('/api')
.then(response=>response.json())
.then(data=>console.log(data))
},[]);



return(
    <>
        <h1>hello</h1>
    </>
)

}

