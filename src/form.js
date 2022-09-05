import React, { useState } from "react";
import './form.css';
import axios from "axios";


function Form(){
    const [name,setName]=useState("");
    const [mobile,setMobile]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const  [newEntry,setNewEntry] = useState([]);

    const submitForm =(e) =>{
        e.preventDefault();
        const newEntry = { fullname: name , email : email, password : password , mobile : mobile}
        // axios
        //   .post('https://jsonplaceholder.typicode.com/posts', {
        //     fullname: name , body : email, password : password , mobile : mobile
        //   })
        //   .then((response) => {
        //     console.log(response);
        //     setNewEntry(response.data);
        //   });
        setNewEntry([newEntry]);
    }

    return(
        <>
        
            <form onSubmit ={submitForm} className="content">
            <h1>Registration form</h1>
                <div>
                    <label htmlFor="name" >Name : </label><br/>
                    <input type="text" placeholder="Enter your name"  value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label htmlFor="mobile" >Mobile Number : </label><br/>
                    <input type="tel" placeholder="Enter mobile number"  value={mobile} 
                        onChange={(e) => setMobile(e.target.value)}/>
                </div>
                <br/>
                <div>
                    <label htmlFor="email" >Email : </label><br/>
                    <input type="text" placeholder="Enter your email" name="email" id="email" 
                        autoComplete="off" value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <br/>
                <div>
                    <label htmlFor="password" >Password : </label><br/>
                    <input type="text" placeholder="Enter password" name="password" id="password" 
                        autoComplete="off" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br/>

                <button type="submit" className="btn">Register</button>
          
            </form><br/>

            {/* <div> */}
        {/* <button onClick={createPost}>Create Post</button> */}
        {/* <p>Id : {newEntry.name}</p>
        <p>UserId : {newEntry.password}</p>
        <p>Title : {newEntry.email}</p>
        <p>{newEntry.mobile}</p>
        <p>{newEntry.id}</p>
      </div> */}


            {
                newEntry.map((element) => {
                    return(
                    <>
                    <h2>Registration Form Review</h2>
                        <table>
                            <thead>
                                <th>Name</th>
                                <th>Mobile Number</th>
                                <th>Email</th>
                                <th>Password</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{element.fullname}</td>
                                    <td>{element.mobile}</td>
                                    <td>{element.email}</td>
                                    <td>{element.password}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>

                    )
                })

            }
        </>
    );
}
export default Form;