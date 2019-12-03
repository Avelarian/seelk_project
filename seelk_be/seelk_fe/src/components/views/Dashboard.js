import React, { Component, Fragment } from 'react';
import Form from './Form';
import Alerts from './Alerts';

export class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Form />
                <Alerts />
            </Fragment>
        )
    }
}

export default Dashboard