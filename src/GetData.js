import React, { useState } from "react";
import axios from "axios";


 function GetData () {

    const [news,setNews] = useState([])

     const fetchapi = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts/")
        .then((response) =>{
            console.log(response);

            setNews(response.data)
        })

        // const getid = () =>{

        // }
     }
    return(
        <>
        {/* <input value={id} onChange={getid}/> */}
        <button onClick={fetchapi}>click me</button>
            {
                news.map((item) => {
                    return(
                    <>
                    <p>Id : {item.id}</p>
                    <p>UserId : {item.userId}</p>
                    <ul>
                        <li>{item.title}</li>
                        <li>{item.body}</li>
                    </ul>
                    
                    </>
                    )
                })
            }
        </>
    );
}
export default GetData;