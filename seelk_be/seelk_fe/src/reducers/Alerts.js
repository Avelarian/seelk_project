import { GET_ALERTS, DELETE_ALERT, ADD_ALERT, VERIFY_ALERTS } from '../actions/types.js';

const initialState = {
    alerts: [],
    last_alert: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ALERTS:
            return {
                ...state,
                alerts: action.payload
            };
        case DELETE_ALERT:
            return {
                ...state,
                alerts: state.alerts.filter(alert => alert.id !== action.payload)
            };
        case ADD_ALERT:
            return {
                ...state,
                alerts: [...state.alerts, action.payload]
            };
        case VERIFY_ALERTS:
            return {
                ...state,
                last_alert: action.payload
            };
        default:
            return state; 
    }
}