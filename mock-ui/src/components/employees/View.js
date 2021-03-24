import React, { Component } from 'react';

const buttonStyle = {
    width: '75px',
    marginLeft: '5px'
}

class View extends Component {

    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.onSubmit){
            const { firstName, lastName, email } = this.state;
            this.props.onSubmit({
                firstName,
                lastName,
                email
            });
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const error = '';
        const { onCancel } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <form className="col-md" onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Add Employee</h1>
                        {error}
                        <div className="form-group">
                            <label htmlFor="firstName">First name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                name="firstName"
                                value={this.state.firstName}
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="lastName"
                                name="lastName"
                                value={this.state.lastName}
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange} />
                        </div>
                        <div className="form-group row">
                            <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-secondary" style={buttonStyle} onClick={onCancel}>Cancel</button>
                                <button className="btn btn-primary" style={buttonStyle}>Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default View;