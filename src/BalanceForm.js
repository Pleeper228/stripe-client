import React from 'react'
import TextField from 'material-ui/TextField'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

export class BalanceForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <MuiThemeProvider>
            $ <TextField
              type='number'
              min="1"
              max={this.props.currentBalance}
              hintText="Enter Amount to Pay"
              errorText={this.props.incorrectAmount}
              onChange={this.props.updateAmountToCharge}
            />
          </MuiThemeProvider>
        </form>
      </div>
    )
  }
}
