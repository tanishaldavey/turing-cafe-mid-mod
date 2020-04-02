import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  render() {
    return (
      <form>
        <input
        type='text'
        placeholder='Name'
        name='name'
        value={this.state.name}
        onChange={e => this.updateValue(e)}
        />
        <input
        type='text'
        placeholder='Date (mm/yy)'
        name='date'
        value={this.state.date}
        onChange={e => this.updateValue(e)}
        />
        <input
        type='text'
        placeholder='Time'
        name='time'
        value={this.state.time}
        onChange={e => this.updateValue(e)}
        />
        <input
        type='text'
        placeholder='Number of guests'
        name='number'
        value={this.state.number}
        onChange={e => this.updateValue(e)}
        />
        <button
          type='button'
          id='submit'
        >Make Reservation
        </button>
      </form>
    )
  }
}
