
import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Table, Button,Form} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
const NewGuest=(props)=>{
    const [guest, setGuest]=useState({
        'userName': '',
        age:0,
        isMarried:false
    })
    const [errors, setErrors]=useState({})
    const navigate=useNavigate()
    //request .post
    // function to handle form 
    const submitHandler=(e)=> {
        e.preventDefault();
        axios.post('http://localhost:8000/api/persons',guest)
        .then((res)=>{
            console.log(res.data);
            navigate('/')
        })
        .catch(err=>{
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors)
        }
        )
    }
    return (
        <div>
            <Form onSubmit={submitHandler} >
                Guest Name: <input type="text"  onChange={(e)=>setGuest({...guest,'userName':e.target.value})} />
                {
                    errors.userName? 
                    <p className="text-danger" >{errors.userName.message}</p> : null
                }
                Age: <input type="number"  onChange={(e)=>setGuest({...guest,'age':e.target.value})} />
                 {
                    errors.age? 
                    <p className="text-danger" >{errors.age.message}</p> : null
                }
                isMarried: <input type="checkbox"  onChange={()=>setGuest({...guest,'isMarried':!guest.isMarried})} />
                 {
                    errors.isMarried? 
                    <p className="text-danger" >{errors.isMarried.message}</p> : null
                }
                <Button type="submit" >Add</Button>
            </Form>
        </div>
    )

}

export default NewGuest;