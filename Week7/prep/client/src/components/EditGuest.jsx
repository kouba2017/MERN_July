import axios from "axios"
import { useEffect ,useState} from "react"
import { useParams,useNavigate } from "react-router-dom"
import { Button,Form} from 'react-bootstrap'


const EditGuest=(props)=>{
    const [guest, setGuest]=useState({
        'userName': '',
        age:0,
        isMarried:false
    })
    const [errors, setErrors]=useState({})
    const navigate=useNavigate()
    const {id}= useParams()
    //We want to see a prefilled form
    const getGuest=()=>{
        axios.get('http://localhost:8000/api/person/'+id)
        .then ((res)=>{
            console.log(res);
            
            setGuest(res.data)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    }
    useEffect(()=>{
        getGuest()
        console.log("Running Get One");
        
    },[])
    const submitHandler=(e)=>{
        e.preventDefault()
        axios.put('http://localhost:8000/api/person/'+id,guest)
        .then((res)=>{
            navigate('/')
        })
        .catch(err=>{
            console.log(err.response.data.errors);
            setErrors(err.response.data.errors)
            getGuest()
        })
    }
    return (
        <div>
            <Form onSubmit={submitHandler} >
                    Guest Name: <input type="text" value={guest.userName}  onChange={(e)=>setGuest({...guest,'userName':e.target.value})} />
                    {
                        errors.userName? 
                        <p className="text-danger" >{errors.userName.message}</p> : null
                    }
                    Age: <input type="number"  value={guest.age} onChange={(e)=>setGuest({...guest,'age':e.target.value})} />
                    {
                        errors.age? 
                        <p className="text-danger" >{errors.age.message}</p> : null
                    }
                    isMarried: <input type="checkbox"  value={guest.isMarried} onChange={()=>setGuest({...guest,'isMarried':!guest.isMarried})} />
                    {
                        errors.isMarried? 
                        <p className="text-danger" >{errors.isMarried.message}</p> : null
                    }
                <Button type="submit" >Edit</Button>
            </Form>
        </div>
    )
}

export default EditGuest