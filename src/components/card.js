import React, { Component } from "react";
import { connect } from "react-redux";
import { editCard, deleteCard } from "../action";
import { Draggable } from "react-beautiful-dnd";

class card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editCard: false,
    };
  }

  componentDidMount() {
    let { info } = this.props;
    if (this.props.info) {
      this.setState({
        text: info.text,
      });
    }
  }

  handleInput = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleEdit = () => {
    let { dispatch, info, listId } = this.props;
    let { text } = this.state;
    if (text) {
      dispatch(editCard(info.id, text, listId));
      this.setState({
        editCard: false,
      });
    }
  };

  showEdit = () => {
    this.setState({
      editCard: true,
    });
  };

  hideEdit = () => {
    this.setState({
      editCard: false,
    });
  };

  handleDelete = () => {
    let { dispatch, info, listId } = this.props;
    dispatch(deleteCard(info.id, listId));
  };

  render() {
    const { info, index } = this.props;
    const { editCard } = this.state;

    return (
      <Draggable draggableId={String(info.id)} index={index}>
        {(provided) => (
          <div
            className="card_container"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {editCard ? (
              <>
                <input
                  type="text"
                  className="input_text"
                  name="text"
                  placeholder="Enter new title"
                  autoFocus
                  onChange={this.handleInput}
                  value={this.state.text}
                />
                <div className="btn_container">
                  <input
                    type="submit"
                    value="Edit Title"
                    className="btn"
                    onClick={this.handleEdit}
                  />
                  <div className="cancel_btn" onClick={this.hideEdit}>
                    X
                  </div>
                </div>
              </>
            ) : (
              <>
                <span className="card_content">{info ? info.text : null}</span>
                <div className="icon_section">
                  <div onClick={this.showEdit} className="icon">
                    <i className="fas fa-edit"></i>
                  </div>
                  <div onClick={this.handleDelete} className="icon">
                    <i className="fas fa-trash"></i>
                  </div>
                </div>
              </>
            )}
          </div>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.board,
});

export default connect(mapStateToProps)(card);
