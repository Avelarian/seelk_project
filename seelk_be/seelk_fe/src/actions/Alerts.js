import axios from 'axios';

import { GET_ALERTS, DELETE_ALERT, ADD_ALERT, VERIFY_ALERTS } from './types';

import { tokenConfig } from './Auth';

const coinapi_url = 'https://rest-sandbox.coinapi.io/v1/exchangerate/BTC/USD';
const api_key = '4FD46CD6-7ACA-4EB3-AA2D-8270DC57330A';
const headers = {
    'X-CoinAPI-Key': api_key
}

export const getAlerts = () => (dispatch, getState) => {
    axios.get('/api/seelk-alert/', tokenConfig(getState)).then(res => {
        dispatch({
            type: GET_ALERTS,
            payload: res.data
        })
    }).catch(err => console.log(err));
}

export const deleteAlert = (id) => (dispatch, getState) => {
    axios.delete(`/api/seelk-alert/${id}/`, tokenConfig(getState)).then(res => {
        dispatch({
            type: DELETE_ALERT,
            payload: id
        })
    }).catch(err => console.log(err));
}

export const addAlert = (alert) => (dispatch, getState) => {
    axios.post('/api/seelk-alert/', alert, tokenConfig(getState)).then(res => {
        dispatch({
            type: ADD_ALERT,
            payload: res.data
        })
    }).catch(err => console.log(err));
}
// axios.get(URL, { params:{}, headers: { 'Authorization': AuthStr } })
export const verifyAlerts = () => (dispatch, getState) => {
    axios.get(coinapi_url, { params: {}, headers: headers }).then(res => {
        dispatch({
            type: VERIFY_ALERTS,
            payload: res.data
        })
        console.log(res.data);
        axios.post('/api/btc-last-value/', res.data, tokenConfig(getState)).then(res => {
            console.log('Post successfull!');
            console.log(res.data);
        }).catch(err => console.log(err));
    }).catch(err => console.log(err));
}