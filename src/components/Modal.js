import React, { Component } from "react";
import { Header, Icon, Modal } from "semantic-ui-react";
import { connect } from "react-redux";
import { updateService } from "../actions";

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: true,
      form: {
        machine: 0,
        engineers: 0,
        start: 0,
        duration: 0
      }
    };
  }
  

  componentDidMount() {
    this.setState({ form: { ...this.props.service[0] } });
  }

  handleClose = () => {
    this.props.onClick();
    this.setState({ modalOpen: false });
    this.props.updateService(this.state.form);
  };
  onChange = e => {
    let field = e.target.name;
    this.setState({
      form: { ...this.state.form, ...{ [`${field}`]: +e.target.value } }
    });
  };

  render() {
    const { service, machine, start, duration, engineers } = this.state.form;
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="hotjar" content={`Service:  ${service}`} />

        <div className="ui form">
          <div>
            {this.renderFields}
            <div className="field">
              Machine
              <input
                type="number"
                value={machine}
                onChange={e => {
                  this.onChange(e);
                }}
                name="machine"
              />
            </div>
            <div className="field">
              Start date
              <input
                type="number"
                name="start"
                onChange={e => {
                  this.onChange(e);
                }}
                value={start}
              />
            </div>
            <div className="field">
              Duration
              <input
                type="number"
                name="duration"
                onChange={e => {
                  this.onChange(e);
                }}
                value={duration}
              />
            </div>
            <div className="field">
              Engineers
              <input
                type="number"
                name="engineers"
                onChange={e => {
                  this.onChange(e);
                }}
                value={engineers}
              />
            </div>
          </div>
        </div>

        <Modal.Actions>
          <button className="positive ui button" onClick={this.handleClose}>
            <Icon className="checkmark" /> Back
          </button>
          <button className="positive ui button" onClick={this.handleClose}>
            <Icon className="checkmark" /> Submit
          </button>
        </Modal.Actions>
      </Modal>
    );
  }
}

function mapStatToProps(state, ownProps) {
  return {
    service: state.table.filter(service => service.id === ownProps.id)
  };
}

export default connect(
  mapStatToProps,
  { updateService }
)(Service);
