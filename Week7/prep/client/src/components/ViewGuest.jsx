import axios from "axios"
import { useEffect ,useState} from "react"
import { useParams,useNavigate } from "react-router-dom"
import { Card} from 'react-bootstrap'


const ViewGuest=(props)=>{
    const [guest, setGuest]=useState({
        'userName': '',
        age:0,
        isMarried:false
    })
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
   
    return (
        <div>
         <Card>
            <Card.Body>
                <Card.Title>{guest.userName}</Card.Title>
                <Card.Text>
                    Age:<p>{guest.age}</p>
                    Marital Status:{
                        guest.isMarried? <p>Yes</p> : <p>No</p>
                    }
                </Card.Text>
                
            </Card.Body>
         </Card>
        </div>
    )
}

export default ViewGuest