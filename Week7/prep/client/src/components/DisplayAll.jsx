import React, { useEffect, useState } from "react";
import axios from 'axios'
import {Table, Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'

const DisplayAll=(props)=>{
    const [guests, setGuests]=useState([])
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:8000/api/persons')
        .then((res)=>{
            console.log(res);
            
            setGuests(res.data);
            console.log(guests);

        })
        .catch((err)=>{
            console.log(err);
            
        })
    },[])
    const deleteGuest=(id)=>{
        axios.delete(`http://localhost:8000/api/person/${id}`)
            .then(()=>navigate("/"))
            .catch((err)=>{
                console.log(err);
                
            })
            //refresh to that guest list
            setGuests(guests.filter(guest=>guest._id !== id))
    }
    return (
        <div>
            <h1>All Guests</h1>
            <Table  striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Guest Name</th>
                        <th>Age</th>
                        <th>isMarried</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {console.log(guests[1])}
                <tbody>
                    {   
                        guests.map((guest)=>(
                                <tr key={guest._id} >
                                <td><Link  to={`/${guest._id}`} >{guest.userName}</Link></td>
                                <td>{guest.age}</td>
                                <td>{guest.isMarried ? 'Yes' : 'No'}</td>
                                <td  >
                                    <button className="btn btn-danger" onClick={()=>deleteGuest(guest._id)} >Delete</button>
                                    <Link className="btn btn-success" to={"/edit/"+guest._id} >Edit </Link>
                                </td>
                            </tr>
                            )
                        )
                    }
                </tbody>
            </Table>
            <Link to={'/create'} >Add a new Guest</Link>
        </div>
    )

}

export default DisplayAll