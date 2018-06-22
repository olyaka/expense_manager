import React from "react";
import "./index.css";
import { BrowserRouter, Route, Link } from "react-router-dom"

import "react-datepicker/dist/react-datepicker.css";

import Sort from "./components/Sort";
import Filt from "./components/Filt";
import CurrentSum from "./components/CurrentSum";
import ExpList from "./components/ExpenseList";
import AddForm from "./components/Add";


class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" component={ExpManager} exact />
                    <Route path="/add" component={AddExpense} />
                    <Route path="/edit" component={AddExpense} />
                </div>
            </BrowserRouter>
        );
    }
}

const ExpManager = () => {
    return (
        <div className="container">
            <div className="add-field">
                <button><Link to="/add">Add</Link></button>
            </div>
            <div className="sort-field">
                <Sort />
            </div>
            <div className="filt-field">
                <Filt />
            </div>
            <div className="sum-field">
                <CurrentSum />
            </div>
            <div className="list-field">
                <ExpList />
            </div>
        </div>
    )
}

const AddExpense = () => {
    return (
        <AddForm />
    );
};

export default App;
