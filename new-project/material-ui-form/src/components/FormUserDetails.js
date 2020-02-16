import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
    continue = e => {
        e.prevent.default();
        this.props.nextStep();
    }

    render() {
        const { values } = this.props;

    return (
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title="Enter User Details" />
                <TextField
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    // onChange={handleChange}
                />

            </React.Fragment>
        </MuiThemeProvider>

        )
    }
}

export default FormUserDetails