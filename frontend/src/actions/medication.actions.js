import axios from '../helpers/axios';
import {medicationConstants} from "./constants";

export const add_medication = (data) => {
    return async (dispatch) => {
        dispatch({type: medicationConstants.ADD_MEDICATION_REQUEST});
        const response = await axios.post('medication', {
            ...data
        });
        const {medication, error} = response.data;
        if(response.status === 201){
            dispatch({type: medicationConstants.ADD_MEDICATION_SUCCESS, payload: medication});
        }else{
            dispatch({type: medicationConstants.ADD_MEDICATION_FAILURE, error: error});
        }
    }
}

export const getMedications = () => {
    return async (dispatch) => {
        dispatch({type: medicationConstants.GET_MEDICATIONS_REQUEST});
        const response = await axios.get('medication');
        const {medications, error} = response.data;
        if(response.status === 200){
            dispatch({type: medicationConstants.GET_MEDICATIONS_SUCCESS, payload: medications})
        }else{
            dispatch({type: medicationConstants.GET_MEDICATIONS_FAILURE, error:error})
        }
    }
}


export const deleteMedication = (id) => {
    return async (dispatch) => {
        dispatch({type: medicationConstants.DELETE_MEDICATIONS_REQUEST});
        const response = await axios.post('medication/delete', {
            id
        });
        const {updated_medications, error} = response.data;
        if(response.status === 200){
            dispatch({type: medicationConstants.DELETE_MEDICATIONS_SUCCESS, payload: updated_medications});
        }else{
            dispatch({type: medicationConstants.DELETE_MEDICATIONS_FAILURE, error});
        }
    }
}


export const editMedication = (data) => {
    return async (dispatch) => {
        dispatch({type: medicationConstants.EDIT_MEDICATION_REQUEST});
        const response = await axios.put('medication', {
            ...data
        });
        const {updated_medications, error} = response.data;
        if(response.status === 200){
            dispatch({type: medicationConstants.EDIT_MEDICATION_SUCCESS, payload: updated_medications});
        }else{
            dispatch({type: medicationConstants.EDIT_MEDICATION_FAILURE, error:error});
        }
    }
}