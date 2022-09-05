import React, { useState } from "react";
import axios from "axios";


 function  PostData() {

    const [news,setNews] = useState([])

    function createPost() {
        axios
          .post('https://jsonplaceholder.typicode.com/posts', {
            userId:"1",
            title: "Hello World!",
            body: "This is a new post."
          })
          .then((response) => {
            console.log(response);
            setNews(response.data);
          });
      }
    

    


    return(
        <>
        <div>
          {/* <input /> */}
        <button onClick={createPost}>Create Post</button>
        <p>Id : {news.id}</p>
        <p>UserId : {news.userId}</p>
        <p>Title : {news.title}</p>
        <p>{news.body}</p>
      </div>
    </>
    );
    }
  export default PostData;