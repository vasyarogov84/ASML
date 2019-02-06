import React, { Component } from "react";
import { XYPlot, XAxis, YAxis, LineSeries, LabelSeries } from "react-vis";
import { connect } from "react-redux";
import { xyData } from "./XY";

import { Header } from "./Header";
import EditService from "./Modal";

class App extends Component {
  state = {
    labelData: [],
    modal: false,
    service_id: ""
  };
  componentDidMount() {
    const labels = this.props.table.map(label => label.eLabel);
    this.setState({ labelData: [...this.state.labelData, ...labels] });
  }
  renderXY = () => {
    return xyData.map((xy, i) => {
      return (
        <LineSeries
          key={i}
          opacity={xy[2]}
          strokeStyle={xy[1]}
          color="black"
          data={xy[0]}
        />
      );
    });
  };
  renderServices = () => {
    return this.props.table.map(service => {
      let { machine: y, start: x, duration, id } = service;
      let time = duration / 24;
      let color = y === 1 ? "red" : y === 2 ? "blue" : "yellow";
      return (
        <LineSeries
          key={id}
          strokeWidth={4}
          color={color}
          data={[{ x: x, y: y }, { x: x + time, y: y }]}
        />
      );
    });
  };
  renderTable = () => {
    return this.props.table.map((tr, i) => {
      //console.log("tr", tr)
      const { duration, engineers, machine, service, start , id } = tr; 
      return (
        <tr key={i}>
          <td data-label="service">{service}</td>
          <td data-label="machine">{machine}</td>
          <td data-label="start"> {`Day ${start}`}</td>
          <td data-label="duration">{`${duration} hrs`}</td>
          <td data-label="engineers">{engineers}</td>
          <td data-label="engineers">
            <button
              className="ui primary button"
              onClick={() => {
                this.openModal(id);
              }}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
  };

  openModal = async id => {
    await this.setState({ modal: true, service_id: id });
};

  render() {
    return (
      <div className="ui container" style={{ marginTop: "50px" }}>
        <Header />
        <div className="ui two column grid">
          <div className="row">
            <div className="column">
              <XYPlot width={500} height={400}>
                {this.renderXY()}
                {this.renderServices()}

                <LabelSeries data={this.state.labelData} />

                <XAxis title="DAYS" />
                <YAxis title="Machines" />
              </XYPlot>
            </div>
            <div className="column">
              <table style={{ height: "375px" }} className="ui celled table">
                <thead>
                  <tr>
                    <th>Service Action</th>
                    <th>Machine</th>
                    <th>Start date</th>
                    <th>Duration</th>
                    <th>Engineers</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>{this.renderTable()}</tbody>
              </table>
            </div>
          </div>
        </div>
        {this.state.modal ? <EditService onClick={() => {this.setState({modal: !this.state.modal})}} id={this.state.service_id}/> : ""}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    table: state.table
  };
}

export default connect(mapStateToProps)(App);
