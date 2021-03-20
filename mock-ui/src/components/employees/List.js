import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import * as actions from '../../store/actions/employees';
import ConfirmDialog from '../dialog/ConfirmDialog';

import "@reach/dialog/styles.css";

class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirmTitle: 'Confirm Delete',
            confirmDesc: '',
            employee: null
        };
        this._dialog = React.createRef();
    }

    confirmDelete = (employee) => {
        this.setState({ 
            confirmDesc: `Are you sure you want to delete ${employee.first_name} ${employee.last_name}?`,
            employee
        });
        this._dialog.current.open();
    }

    onDismiss = (cancelled) => {
        if (!cancelled) {
            this.props.deleteEmployee(this.state.employee);
        }
    }

    componentDidMount() {
        this.props.fetchEmployees();
    }

    render() {
        const { employees, error } = this.props;
        let displayError = null;
        let employeesDisplay = <tr><td colspan="2">No Employees</td></tr>;

        if (error) {
            displayError = <div>Error: { error }</div>
        }
        
        if (employees){
            employeesDisplay = employees.map(e => {
                return (
                    <tr key={e.id}>
                        <td>{e.id}</td>
                        <td>{e.first_name}</td>
                        <td>{e.last_name }</td>
                        <td>{e.email}</td>
                        <td><button className="btn btn-danger" onClick={ () => this.confirmDelete(e) }>X</button></td>
                    </tr>
                )
            });
        }
        
        return (
            <div>
                <h1 className="display-1">Employee List</h1>
                { displayError }
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { employeesDisplay }
                    </tbody>
                </table>
                <ConfirmDialog
                    ref={this._dialog}
                    title={this.state.confirmTitle}
                    description={this.state.confirmDesc}
                    onDismiss={this.onDismiss}
                />
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