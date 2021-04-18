import React, {useState} from 'react';
import {FaEdit, FaTrash} from "react-icons/fa";
import {Button, Card, Form, Modal} from 'react-bootstrap';
import swal from "sweetalert";
import {deleteMedication, editMedication} from "../../actions/medication.actions";
import {useDispatch} from "react-redux";
import './style.css';

const MedicationCard = (props) => {
    const dispatch = useDispatch();
    const {item} = props;
    const [editModal, setEditModal] = useState(false);
    let [name, setName] = useState('');
    let [dosage, setDosage] = useState('');
    let [frequency, setFrequency] = useState('');


    const edit = () => {
        if(name === ''){
            name = item.name;
        }
        if(dosage === ''){
            dosage = item.dosage;
        }
        if(frequency === ''){
            frequency = item.frequency;
        }
        const data = {
            med_id: item._id,
            med_data: {
                name, dosage, frequency
            }
        };
        dispatch(editMedication(data));
        setEditModal(false);
    }
    const delete_medication = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this medication!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    dispatch(deleteMedication(item._id));
                    swal("Poof! Your medication has been deleted!", {
                        icon: "success",
                    });
                }
            });
    }
    return (
        <>
            <Card style={{ width: '18rem' }} className={"card float-left ml-4 mt-4"}>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        Dosage: {item.dosage}<br />
                        Frequency: {item.frequency}
                    </Card.Text>
                    <FaEdit onClick={() => setEditModal(true)} className="pointer"/>
                    <FaTrash onClick={delete_medication} className="text-danger pointer" />
                </Card.Body>
            </Card>

            <Modal
                size="lg"
                show={editModal}
                onHide={() => setEditModal(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Edit {item.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Medicine Name </Form.Label>
                        <input type="text" placeholder={item.name} className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Dosage </Form.Label>
                        <input type="text" placeholder={item.dosage} className="form-control" value={dosage} onChange={(e)=>setDosage(e.target.value)} required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Frequency </Form.Label>
                        <input type="text" placeholder={item.frequency} className="form-control" value={frequency} onChange={(e)=>setFrequency(e.target.value)} required/>
                    </Form.Group>
                    <Button className="float-right" onClick={edit}>Save Changes</Button>
                </Modal.Body>
            </Modal>

        </>
    )
}


export default MedicationCard;