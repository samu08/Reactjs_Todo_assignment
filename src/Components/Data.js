import React,{useState,useEffect}from 'react'
import axios from 'axios';
import {useHistory,Link} from 'react-router-dom'

const Data =()=>{
    const [input,setinput]=useState([])
    const [value,setvalue]=useState([])
    let history=useHistory();

    useEffect(()=>{

        axios.get('https://jsonplaceholder.typicode.com/todos').then(result=>{

        setinput(result.data)

       
        })
    })


    const getuser=()=>{
          
            history.push('/details/:id')


    }
    return(

    

        
        <table class="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>completed</th>
          </tr>
        </thead>
<tbody>
        {

            input.map(item=>{

                return<tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.completed}</td>
           
             <Link to={`/details/${item.id}`} class="btn btn-primary"> view</Link>
                    </tr>
            })
        }
       
       </tbody>
   
      </table>

       
    )

}

export default Data
