import {useState} from 'react'
import {useLocation,useNavigate} from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";
import {Button,Alert} from 'react-bootstrap'
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    let navigate = useNavigate();
    const {state} = useLocation();
    const [msg,setMsg] = useState(true)
    

    let handleLogOut = ()=>{
        
        const auth = getAuth();
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((error) => {
            console.log(error)
        });
    }

    setTimeout(()=>{
        setMsg(false)
    },2000)
  return (
    <>
            {msg
                ?
                <Alert variant="primary">
                 <h1>{state}</h1>
                </Alert>
                :
                ""
            }
        
        <Button onClick={handleLogOut} variant="dark">Logout</Button>
    </>
  )
}

export default Home