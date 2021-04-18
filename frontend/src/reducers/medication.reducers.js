import {medicationConstants} from "../actions/constants";

const initState = {
    loading: false,
    medications: null,
    error: ''
}

const build_new_medications = (medication, medications) => {
    const new_medications = [];
    for(let med of medications){
        new_medications.push(med);
    }
    new_medications.push(medication);
    return new_medications;
}


export default (state = initState, action) => {
    switch (action.type) {
        case (medicationConstants.ADD_MEDICATION_REQUEST):
            state = {
                ...state,
                loading: true
            }
            break;

        case (medicationConstants.ADD_MEDICATION_SUCCESS):
            state = {
                ...state,
                medications: build_new_medications(action.payload, state.medications),
                loading: false
            }
            break;

        case (medicationConstants.ADD_MEDICATION_FAILURE):
            state = {
                ...state,
                loading: false,
                error: action.error.error
            }
            break;

        case (medicationConstants.GET_MEDICATIONS_REQUEST):
            state = {
                ...state,
                loading: true,
            }
            break;

        case (medicationConstants.GET_MEDICATIONS_SUCCESS):
            state = {
                ...state,
                medications: action.payload,
                loading: false,
            }
            break;

        case (medicationConstants.GET_MEDICATIONS_FAILURE):
            state = {
                ...state,
                loading: false,
                error: action.error.error
            }
            break;

        case (medicationConstants.EDIT_MEDICATION_REQUEST):
            state = {
                ...state,
                loading: true,
            }
            break;

        case (medicationConstants.EDIT_MEDICATION_SUCCESS):
            state = {
                ...state,
                loading: false,
                medications: action.payload
            }
            break;

        case (medicationConstants.EDIT_MEDICATION_FAILURE):
            state = {
                ...state,
                loading: false,
            }
            break;

        case (medicationConstants.DELETE_MEDICATIONS_REQUEST):
            state = {
                ...state,
                loading: true,
            }
            break;

        case (medicationConstants.DELETE_MEDICATIONS_SUCCESS):
            state = {
                ...state,
                medications: action.payload,
                loading: false,
            }
            break;

        case (medicationConstants.DELETE_MEDICATIONS_FAILURE):
            state = {
                ...state,
                loading: false,
                error: action.error
            }
            break;
    }

    return state;
}