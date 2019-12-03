import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAlert } from '../../actions/Alerts';

export class Form extends Component {

    state = {
        alert_param: "",
        alert_name: "",
        alert_message: "",
        alert_mov: ""
    }

    static propTypes = {
        addAlert: PropTypes.func.isRequired
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { alert_name, alert_param, alert_message, alert_mov } = this.state;
        const alert = { user: 1, alert_name, alert_param, alert_message, alert_mov };
        this.props.addAlert(alert);
    }

    render() {
        const { alert_name, alert_param, alert_message, alert_mov } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Alert</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Alert Name</label>
                        <input
                        className="form-control"
                        type="text"
                        name="alert_name"
                        onChange={this.onChange}
                        value={alert_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Alert Parameter</label>
                        <input
                        className="form-control"
                        type="number"
                        name="alert_param"
                        onChange={this.onChange}
                        value={alert_param}
                        />
                    </div>
                    <div className="form-group">
                        <label>Alert Message</label>
                        <input
                        className="form-control"
                        type="text"
                        name="alert_message"
                        onChange={this.onChange}
                        value={alert_message}
                        />
                    </div>
                    <div className="form-group">
                        <label>Alert Movement</label>
                        <small>When it will alert you?</small>
                        <select
                        className="form-control"
                        type="text"
                        name="alert_mov"
                        onChange={this.onChange}
                        value={alert_mov}
                        >
                            <option value="" disabled>...</option>
                            <option value="u">When to overtake.</option>
                            <option value="d">When to rewind.</option>
                            <option value="b">Both movements.</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addAlert })(Form);