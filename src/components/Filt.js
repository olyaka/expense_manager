import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";

class Filt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            endDate: moment()
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
    }

    render() {
        return (
            <div>
                <div>Filter</div>

                <DatePicker
                    selected={this.state.startDate}
                    selectsStart
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeStart}
                />

                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd}
                />
            </div>
        );
    }
}

export default Filt;
