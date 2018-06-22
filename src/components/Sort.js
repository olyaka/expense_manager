import React from "react";

class Sort extends React.Component {
    render() {
        return (
            <div>
                <div>Sort</div>
                <select>
                    <option value="date">Date</option>
                    <option value="sum">Sum</option>
                </select>
            </div>
        );
    }
}

export default Sort;
