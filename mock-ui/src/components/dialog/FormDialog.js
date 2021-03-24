import React, { Component } from 'react';

import { Dialog } from "@reach/dialog";

class FormDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }
    
    open = () => {
        this.setState({
            isOpen: true
        });
    }

    close = () => {
        this.setState({
            isOpen: false
        });
    }

    submit = (data) => {
        this.setState({
            isOpen: false
        });
        
        if (this.props.onSuccess){
            this.props.onSuccess(data);
        }
    }

    render() {
        const employeeView = React.cloneElement(
            React.Children.only(this.props.children),
            { 
                onCancel: () => this.close(),
                onSubmit: (data) => {
                    this.submit(data);
                }
            }
        );

        return (
            <div>
            { 
                this.state.isOpen && (
                    <Dialog aria-label="confirm-dialog">
                        { employeeView }
                    </Dialog>
                )
            }
            </div>
        );
    }
}

export default FormDialog;