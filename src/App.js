import React, { Component } from 'react';
import logo from './logo.svg';
import Checkout from './Checkout';
import './App.css';
import AlertMessage from './AlertMessage'
import { BalanceForm } from './BalanceForm'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alert: false,
      alertMessage: '',
      currentBalance: 387.00,
      amountToCharge: 100,
      incorrectAmount: ''
    }
    this.alertSuccess = this.alertSuccess.bind(this)
    this.alertError = this.alertError.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.updateAmountToCharge = this.updateAmountToCharge.bind(this)
  }

  alertSuccess(data) {
    console.log(data.data.success.amout)
    this.setState({
      alert: true,
      alertMessage: `Success! ${data.data.success.description} You have been charged $${this.state.amountToCharge / 100}!`,
      currentBalance: ((this.state.currentBalance * 100) - data.data.success.amount) / 100
    })
  }

  alertError(data) {
    console.log(data)
    this.setState({
      alert: true,
      alertMessage: `${data}`
    })
  }

  closeDialog() {
    this.setState({
      alert: false
    })
  }

  updateAmountToCharge(event) {
    if (parseFloat(event.target.value) > this.state.currentBalance) {
      this.setState({
        amountToCharge: this.state.currentBalance * 100
      })
    } else if (parseFloat(event.target.value) < 1) {
      this.setState({
        incorrectAmount: 'Must be more money!!'
      })
    } else {
      this.setState({
        amountToCharge: parseFloat(event.target.value) * 100,
        incorrectAmount: ''
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div className='content'>
          <h3>Your current balance is: ${this.state.currentBalance}</h3>
          <BalanceForm
            currentBalance={this.state.currentBalance}
            updateAmountToCharge={this.updateAmountToCharge}
            incorrectAmount={this.state.incorrectAmount}
          />
          <AlertMessage
            alert={this.state.alert}
            closeDialog={this.closeDialog}
            alertMessage={this.state.alertMessage}
          />
          <p className="App-intro">
            <Checkout
              name={'Stripe Test'}
              description={'At Galvanize we even take your fake money!'}
              amount={this.state.amountToCharge ? this.state.amountToCharge : 100}
              alertSuccess={this.alertSuccess}
              alertError={this.alertError}
            />
          </p>
        </div>
      </div>
    );
  }
}

export default App;
