import React, {useState} from 'react';
import Header from "../../components/Header";
import {Button, Container, Modal, Form} from "react-bootstrap";
import './style.css';
import {useDispatch, useSelector} from "react-redux";
import {add_medication} from "../../actions/medication.actions";
import MedicationCard from "../../components/Card";



const Home = () => {
    const dispatch = useDispatch();
    const medications = useSelector(state => state.medication.medications);
    const [lgShow, setLgShow] = useState(false);
    const [name, setName] = useState('');
    const [dosage, setDosage] = useState('');
    const [frequency, setFrequency] = useState('');

    const addMedication = () => {
        const data = {name, dosage, frequency};
        dispatch(add_medication(data));
        setLgShow(false);
    }

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
                            <input type="email" placeholder="Medicine Name" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Dosage </Form.Label>
                            <input type="email" placeholder="Dosage" className="form-control" value={dosage} onChange={(e)=>setDosage(e.target.value)} required/>
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Frequency </Form.Label>
                            <input type="email" placeholder="Amount" className="form-control" value={frequency} onChange={(e)=>setFrequency(e.target.value)} required/>
                        </Form.Group>

                        <Button className="float-right" onClick={addMedication}>Add</Button>
                </Modal.Body>
            </Modal>

            <Container>
                {
                    medications?.map((item, index) => (
                        <MedicationCard
                            key={index}
                            item={item}
                        />
                    ))
                }
            </Container>
        </>
    )
}


export default Home;