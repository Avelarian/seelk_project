import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAlerts, deleteAlert, verifyAlerts } from '../../actions/Alerts';

export class Alerts extends Component {
    static propTypes = {
        alerts: PropTypes.array.isRequired,
        last_alert: PropTypes.object.isRequired,
        getAlerts: PropTypes.func.isRequired,
        deleteAlert: PropTypes.func.isRequired,
        verifyAlerts: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getAlerts();
        //this.props.verifyAlerts();
    }

    verifyAlerts = () => {
        this.props.verifyAlerts();
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col">
                        <h2>Alerts</h2>
                    </div>
                    <div className="col">
                        <button className="btn btn-info float-right" onClick={this.verifyAlerts}>
                            Verify alerts
                        </button>
                    </div>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Alert</th>
                            <th>Name</th>
                            <th>Parameter</th>
                            <th>Movement</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.props.alerts.map(result => (
                            <tr key={result.id}>
                                <td>{result.id}</td>
                                <td>{result.alert_name}</td>
                                <td>{result.alert_param}</td>
                                <td>{result.alert_mov == "b" ? "Up and down" : result.alert_mov == "u" ? "Up" : "Down"}</td>
                                <td>
                                    {/* <button type="button" className="btn btn-primary btn-sm">
                                        Edit
                                    </button> */}
                                    <button onClick={this.props.deleteAlert.bind(this, result.id)} type="button" className="btn btn-danger btn-sm">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    alerts: state.Alerts.alerts,
    last_alert: state.Alerts.last_alert
})

export default connect(mapStateToProps, { getAlerts, deleteAlert, verifyAlerts })(Alerts);