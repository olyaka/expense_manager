import React from "react";

class ExpList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: []
        };
        this.add = this.add.bind(this);
    }

    add(exp) {
        this.setState({
            expenses: this.state.expenses.push(exp)
        })
    }
    render() {
        const items = this.state.expenses.map((item) =>
            <li>{item.sum}</li>
        );
        return (
            <div>
                <div>All expenses</div>
                <ul className="expList">
                    {items}
                </ul>
            </div>
        );
    }
}

export default ExpList;
