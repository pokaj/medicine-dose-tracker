import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import swal from "sweetalert";
import {useDispatch} from "react-redux";
import {signup} from "../../actions/auth.actions";

const Register = (props) => {

    const dispatch = useDispatch();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const register = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            return swal({
                title: "Sorry",
                text: "Passwords entered do not match",
                icon: "error",
                button: "close",
            });
        }
        const data = {firstname, lastname, email, phone, age, password};
        dispatch(signup(data));

    }

    return(
        <>
            <Container>
                <div className="loginCase">
                    <Form onSubmit={register}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>First Name </Form.Label>
                            <input type="text" placeholder="Enter First Name" className="form-control" value={firstname} onChange={(e)=> {setFirstname(e.target.value)}} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Last Name </Form.Label>
                            <input type="text" placeholder="Enter Last Name" className="form-control" value={lastname} onChange={(e)=> {setLastname(e.target.value)}} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email </Form.Label>
                            <input type="email" placeholder="Enter email" className="form-control" value={email} onChange={(e)=> {setEmail(e.target.value)}} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone Number </Form.Label>
                            <input type="tel" placeholder="Enter Phone Number" className="form-control" value={phone} onChange={(e)=> {setPhone(e.target.value)}} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Age </Form.Label>
                            <input type="integer" placeholder="Enter Age" className="form-control" value={age} onChange={(e)=> {setAge(e.target.value)}} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Password </Form.Label>
                            <input type="password" placeholder="Enter Password" className="form-control" value={password} onChange={(e)=> {setPassword(e.target.value)}} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Confirm Password </Form.Label>
                            <input type="password" placeholder="Confirm Password" className="form-control" value={confirmPassword} onChange={(e)=> {setConfirmPassword(e.target.value)}} required/>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                        <Form.Group id={"register"}>
                            <span>Already have an account?</span><span> <a href='/' >Login</a></span>
                        </Form.Group>
                    </Form>
                </div>
            </Container>
        </>
    )
}

export default Register;