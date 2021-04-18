import React, {useState} from "react";
import {Form, Button, Container} from "react-bootstrap";
import './style.css';
import {useDispatch} from "react-redux";
import {login} from "../../actions/auth.actions";



const Login = (props) => {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signin = (e) => {
        const data = {email, password}
        e.preventDefault();
        dispatch(login(data));
    }


    return (
        <>
           <Container>
               <div className="loginCase">
                   <Form onSubmit={signin}>
                       <Form.Group controlId="formBasicEmail">
                           <Form.Label>Email </Form.Label>
                           <input type="email" placeholder="Enter email" className="form-control" value={email} onChange={(e)=> {setEmail(e.target.value)}}/>
                       </Form.Group>

                       <Form.Group controlId="formBasicEmail">
                           <Form.Label>Password </Form.Label>
                           <input type="password" placeholder="Enter email" className="form-control" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>
                       </Form.Group>
                       <Button variant="primary" type="submit">
                           Login
                       </Button>
                       <Form.Group id={"register"}>
                           <span>Don't have an account?</span><span> <a href='/signup' >Signup</a></span>
                       </Form.Group>
                   </Form>
               </div>
           </Container>
        </>
    );
}

export default Login;