import React, { Component } from 'react';

import { Dialog } from "@reach/dialog";

const buttonStyle = {
    width: '85px',
    marginLeft: '5px'
}

class ConfirmDialog extends Component {
    
    open = () => {
        this.setState({ isOpen: true });
    }
    close = (cancelled) => {
        this.setState({ isOpen: false });
        
        if (this.props.onDismiss) {
            this.props.onDismiss(cancelled);
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
                <Dialog onDismiss={this.close} aria-label="confirm-dialog">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.description}</p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
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