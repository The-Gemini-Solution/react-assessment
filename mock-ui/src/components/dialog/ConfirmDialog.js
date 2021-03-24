import React, { Component } from 'react';

import { Dialog } from "@reach/dialog";

const buttonStyle = {
    width: '85px',
    marginLeft: '5px'
}

class ConfirmDialog extends Component {
    
    open = (title, description) => {
        this.setState({ 
            isOpen: true,
            title,
            description
        });
    }
    close = (cancelled) => {
        this.setState({ isOpen: false });
        
        if (this.props.onCancel) {
            this.props.onCancel(cancelled);
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div>
            { this.state.isOpen && (
                <Dialog onCancel={this.close} aria-label="confirm-dialog">
                    <h1>{this.state.title}</h1>
                    <p>{this.state.description}</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                        <button className="btn btn-outline-secondary me-md-2" style={buttonStyle} onClick={() => this.close(true) }>Cancel</button>
                        <button className="btn btn-outline-primary" style={buttonStyle} onClick={() => this.close(false) }>OK</button>
                    </div>
                </Dialog>
            )}
            </div>
        );
    }
}

export default ConfirmDialog;