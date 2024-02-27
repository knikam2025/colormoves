import React from "react";
import "./Counter.css"; 
import { useState } from "react";

function Todo(){

    const [put, setPut] =useState(["hello"]);
    const [newput, setnewPut] = useState('');

   let addtask = () =>{
    setPut([...put, newput]);
    setnewPut('');
   }


    let handleInputChange = (event) =>{
       setnewPut(event.target.value)
    }


    return(
        <div className="Bord"> Todo task
            <input type="text" placeholder="type here" value={newput} onChange={handleInputChange}/>
            <br />
            <button onClick={addtask}>Add</button> <br />
            <ul>
  {put.map((todo, index) => (
    <li key={index}>{todo}</li>
  ))}
</ul> 
        </div>
    )
}

export default Todo;