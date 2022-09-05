// import React from "react";
import React, { useState } from "react";
// import React, { useState } from "react";
import axios from "axios";

function SearchData() {

    const[userId,setId]=useState([]); //to store response
    const[num,setTitle]=useState(''); // to store value of input field

    const submitForm = (e) => {
        e.preventDefault();
        axios.get(`https://jsonplaceholder.typicode.com/todos/${num}`)
        .then((response)=>{
            console.log(response);
            setId(response.data)
        })
    }

    return(
        <>
            <form>
            
            <input type='text' value={num} onChange={(e)=>setTitle(e.target.value) }/>
            
            <button   type='button 'onClick={submitForm}>click me</button>
        
            </form>
                <p>Id:{userId.id}</p>
                <p>{userId.title}</p>

                <br/>
            
      

        </>
     );


} 
export default SearchData;