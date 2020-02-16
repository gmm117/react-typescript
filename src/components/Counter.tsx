import React, { Component } from 'react';

export interface CounterProps {}

export interface CounterState {
  value: number;
}

export class Counter extends Component<CounterProps, CounterState> {
  readonly state: CounterState = { value: 0 };

  public render() {
    return (
      <>
        <div style={{height: '30px', width: '40px', marginLeft: '80px', fontSize: '25px'}}>{ this.state.value }</div>
        <button style={{margin: '10px'}} onClick={ this.handleIncrement }>+</button>
        <button style={{margin: '10px'}} onClick={ this.handleDecrement }>-</button>
      </>
    );
  }

  private handleIncrement = () => this.setState({ value: this.state.value + 1 })
  private handleDecrement = () => this.setState({ value: this.state.value - 1 })
}