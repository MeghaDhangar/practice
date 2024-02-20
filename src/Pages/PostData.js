import React, { useState } from 'react'
import axios from 'axios'
function PostData() {
    const data = { fname: "", lname: "" }
    const [inputData, setInputData] = useState(data)
    const handleData = (e) => {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users",inputData)
        .then((response)=>{
            console.log(response)
        })
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1",inputData)
        .then((response)=>{
            console.log(response)
        })
    }
    return (
        <>
            <label>FirstName :</label>
            <input type='text' name='fname' value={inputData.fname} onChange={handleData} />
            <br />
            <label>LastName :</label>
            <input type='text' name='lname' value={inputData.lname} onChange={handleData} />
            <br /> <br />
            <button type='submit' onClick={handleSubmit} >Submit</button>
            <br/>
            <button type='submit' onClick={handleUpdate} >Update</button>
        </>
    )
}

export default PostData
