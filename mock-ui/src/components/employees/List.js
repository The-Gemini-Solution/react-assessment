import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../store/actions/employees';
import ConfirmDialog from '../dialog/ConfirmDialog';
import FormDialog from '../dialog/FormDialog';
import View from './View';

import "@reach/dialog/styles.css";

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employee: null
        };
        this._confirmDialog = React.createRef();
        this._formDialog = React.createRef();
    }

    confirmDelete = (employee) => {
        this.setState({ employee });
        this._confirmDialog.current.open('Confirm Delete', `Are you sure you want to delete ${employee.first_name} ${employee.last_name}?`);
    }

    addEmployee = () => {
        this._formDialog.current.open();
    }

    onSubmit = (formData) => {
        const employee = {
            id: Math.max(...this.props.employees.map(e => e.id)) +1,
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email
        }
        
        this.props.addEmployee(employee);
    }

    onCancel = (cancelled) => {
        if (!cancelled) {
            this.props.deleteEmployee(this.state.employee);
        }
    }

    componentWillMount() {
        this.props.fetchEmployees();
    }

    render() {
        const { employees, error } = this.props;
        let displayError = null;
        let employeesDisplay = <tr><td colspan="2">No Employees</td></tr>;

        if (error) {
            displayError = <div>Error: {error}</div>
        }

        if (employees) {
            employeesDisplay = employees.map(e => {
                return (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.first_name}</td>
                        <td>{e.last_name}</td>
                        <td>{e.email}</td>
                        <td><button className="btn btn-danger" onClick={() => this.confirmDelete(e)}>X</button></td>
                    </tr>
                )
            });
        }

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10">
                        <h1 className="display-1">Employee List</h1>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-8">{displayError}</div>
                </div>
                <br />
                <div className="row">
                    <div className="col-10">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Email</th>
                                    <th><button className="btn btn-primary" onClick={() => this.addEmployee()}>+</button></th>
                                </tr>
                            </thead>
                            <tbody>
                                {employeesDisplay}
                            </tbody>
                        </table>
                    </div>
                </div>
                <ConfirmDialog
                    ref={this._confirmDialog}
                    onCancel={this.onCancel}
                />
                <FormDialog
                    ref={this._formDialog}
                    onSuccess={this.onSubmit}>
                    <View
                        key="EmployeeView"
                    />
                </FormDialog>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { employees } = state;

    return {
        employees: employees.list,
        error: employees.error
    }
}

export default compose(
    connect(mapStateToProps, actions)
)(List);