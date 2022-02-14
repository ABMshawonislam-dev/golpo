import {useState} from 'react'
import {Button,Container,Row,Alert,Form,Spinner} from 'react-bootstrap'
import {Link,useLocation,useNavigate} from 'react-router-dom'
import '../firebaseconfig'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let navigate = useNavigate();
    const {state} = useLocation();
   

    let [email,setEmail] = useState("")
    let [erremail,setErremail] = useState("")
    let [password,setPassword] = useState("")
    
    let [errpassword,setErrpassword] = useState("")
    let [msg,setMsg] = useState(true)
    let [loading,setLoading] = useState(false)
  
    let handleEmail = (e)=>{
      setEmail(e.target.value)
    }
    let handlePassword = (e)=>{
      setPassword(e.target.value)
    }
  
    let handleSubmit=(e)=>{
    e.preventDefault()
    if(email == ""){
      setErremail("Give AN Email")
  
    }else if(password == ""){
        setErrpassword("Give A Password")
  
    }else{
        setLoading(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((user) => {
            
            setEmail("")
            setPassword("")
            setLoading(false)
            navigate("/",{state:"Welcome To Golpo"});
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
        });

    }
  }
  const notify = () => toast(state);
  // console.log(state.state = "")
  
  if(msg){
      if(state){

          notify()
          setMsg(false)
      }
      
  }
  return (
    <>
         <Container>
             <ToastContainer />
        <Row>
        <Alert className="text-center mt-5" variant="primary">
          <h1>Login For Golpo</h1>
        </Alert>
            <Form>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control onChange={handleEmail} type="email" placeholder="Enter email" value={email}/>
                  {erremail
                  ?
                  <Form.Text className="text-muted err">
                    {erremail}
                  </Form.Text>
                  :
                  ""
                  }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control onChange={handlePassword} type="password" placeholder="Password" value={password}/>
                  {errpassword
                  ?
                  <Form.Text className="text-muted err">
                    {errpassword}
                  </Form.Text>
                  :
                  ""
                  }
                </Form.Group>


                <Button onClick={handleSubmit} className="w-100" variant="primary" type="submit">
                    {loading
                        ?
                        <Spinner animation="border" role="status">
                         <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        :
                        "Login"
                    }
                </Button>
                <div  className='text-center mt-3'>
                <Form.Text id="passwordHelpBlock" muted>
                    Dom't Have An Acoount? <Link to="/registration">Create Account</Link>
                </Form.Text>
                </div>
            </Form>
            
        </Row>
      </Container>
    </>
  )
}

export default Login
