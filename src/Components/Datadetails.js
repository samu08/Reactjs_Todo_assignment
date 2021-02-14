import React,{useState,useEffect}from 'react'
import axios from 'axios';
import {useParams} from 'react-router-dom'

const Datadetails =()=>{

    const {id}=useParams();

    const [input,setinput]=useState([])
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`).then(result=>{
            //setinput('id',result.data.id),
            setinput('title',result.data.email)
           //setinput(result.data)

        })

    }, [id])


    return(
  <div>
     
    </div>
       
       

    )

}

export default Datadetails