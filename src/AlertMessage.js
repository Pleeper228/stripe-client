import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export default class AlertMessage extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.props.closeDialog}
      />,
    ];

    return (
      <MuiThemeProvider>
        <Dialog
          title={this.props.alertMessage}
          actions={actions}
          modal={false}
          open={this.props.alert}
          onRequestClose={this.handleClose}
        >
          {this.props.message}
        </Dialog>
      </MuiThemeProvider>
    );
  }
}
