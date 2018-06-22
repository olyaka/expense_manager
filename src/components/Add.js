import { BrowserRouter, Route, Link } from "react-router-dom"

import React from "react";

import { createStore } from 'redux';
import { connect } from 'react-redux';

import ExpList from "./ExpenseList";

function list(state = [], action) {
    if (action.type === "ADD_EXPENSE") {
        return [
            ...state, 
            action.payload
        ];
    }
    return state;
}

const store = createStore(list);

class AddForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: "",
            date: "",
            descr: "",
        };

        this.handleSumChange = this.handleSumChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDescrChange = this.handleDescrChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSumChange(event) {
        this.setState({ sum: event.target.value });
    }

    handleDateChange(event) {
        this.setState({ date: event.target.value });
    }

    handleDescrChange(event) {
        this.setState({ descr: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        store.dispatch({type: "ADD_EXPENSE", payload: this.state});
        console.log(store.getState());
    }

 

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Sum:
            <input type="text" value={this.state.sum} onChange={this.handleSumChange} />
                </label>
                <label>
                    Date:
            <input type="date" value={this.state.date} onChange={this.handleDateChange} />
                </label>
                <label>
                    Description:
            <input type="text" value={this.state.descr} onChange={this.handleDescrChange} />
                </label>
                <input type="submit" value="Add" />
            </form>
        );
    }
}

function mapStateToProps (state) {
    return {
      expense: state
    }
  }

export default connect(mapStateToProps)(AddForm);