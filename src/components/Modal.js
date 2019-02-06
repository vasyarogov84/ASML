import React, { Component } from "react";
import { Header, Icon, Modal } from "semantic-ui-react";
import { connect } from "react-redux";

class EditService extends Component {
  state = { modalOpen: true };

  handleClose = () => {
    this.props.onClick();
    this.setState({ modalOpen: false });
  };

  render() {
    const {
      id,
      duration,
      service,
      start,
      machine,
      engineers
    } = this.props.service_to_edit[0];
    return (
      <Modal
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size="small"
      >
        <Header icon="hotjar" content={`Service: ${service}`} />
        <Modal.Content>
          <div className="ui form">
            <div className="five fields">
              <div className="field">
                Machine
                <input type="text" placeholder="Machine" value={machine}/>
              </div>
              <div className="field">
              Start date
                <input type="text" placeholder="Start date" value={start}/>
              </div>
              <div className="field">
              Duration
                <input type="text" placeholder="Duration" value={duration}/>
              </div>
              <div className="field">
              Engineers
                <input type="text" placeholder="Engineers" value={engineers}/>
              </div>
            </div>
          </div>
          {this.renderForm}
        </Modal.Content>
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
    service_to_edit: state.table.filter(service => service.id === ownProps.id)
  };
}

export default connect(mapStatToProps)(EditService);
