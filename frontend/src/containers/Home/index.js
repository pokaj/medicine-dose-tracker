import React, {useState} from 'react';
import Header from "../../components";
import {Card, Button, Container, Modal, InputGroup, Form} from "react-bootstrap";
import './style.css';
import pill from '../../img/pill.png';

const Home = () => {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Header />
            <Button onClick={() => setLgShow(true)} className="mt-2 ml-3">Add Medication</Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add New Medication
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Medicine Name </Form.Label>
                        <input type="email" placeholder="Medicine Name" className="form-control"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Dosage </Form.Label>
                        <input type="email" placeholder="Dosage" className="form-control"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Frequency </Form.Label>
                        <input type="email" placeholder="Frequency in minutes" className="form-control"/>
                    </Form.Group>

                    <Button className="float-right">Add</Button>
                </Modal.Body>
            </Modal>

            <Container>
                <Card style={{ width: '18rem' }} className={"card"}>
                    <Card.Img variant="top" src={pill} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}


export default Home;