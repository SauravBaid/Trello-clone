import React, { Component } from "react";
import Card from "./card";
import { addCard, editName, deleteList } from "../action";
import { connect } from "react-redux";
import { Droppable } from "react-beautiful-dnd";

class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
      editTitle: false,
      text: "",
      info: "",
    };
  }
  addCard = () => {
    const { dispatch, id } = this.props;
    const { info } = this.state;
    if (info) {
      dispatch(addCard(id, info));
      this.setState({
        info: "",
        showCard: false,
      });
    }
    return;
  };

  editTitle = () => {
    const { dispatch, id } = this.props;
    const { text } = this.state;
    // console.log(id);
    if (text) {
      dispatch(editName(id, text));
      this.setState({
        editTitle: false,
        text: "",
      });
    }
  };

  deleteList = () => {
    const { dispatch, id } = this.props;
    dispatch(deleteList(id));
  };

  showCard = () => {
    this.setState({
      showCard: true,
    });
  };

  hideCard = () => {
    this.setState({
      showCard: false,
    });
  };

  showEdit = () => {
    this.setState({
      editTitle: true,
    });
  };

  hideEdit = () => {
    this.setState({
      editTitle: false,
    });
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { cards, id } = this.props;
    const { editTitle, showCard, info } = this.state;
    return (
      <Droppable droppableId={String(id)}>
        {(provided) => (
          <div
            className="list_container"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {editTitle ? (
              <>
                <input
                  type="text"
                  className="input_text"
                  name="text"
                  placeholder="Enter new title"
                  autoFocus
                  onChange={this.handleInput}
                />
                <div className="btn_container">
                  <input
                    type="submit"
                    value="Edit Title"
                    className="btn"
                    onClick={this.editTitle}
                  />
                  <div className="cancel_btn" onClick={this.hideEdit}>
                    X
                  </div>
                </div>
              </>
            ) : (
              <>
                <span className="list_heading">{this.props.heading}</span>
                <div
                  onClick={this.deleteList}
                  style={{
                    float: "right",
                    cursor: "pointer",
                    padding: "0rem 0.5rem",
                  }}
                >
                  <i className="fas fa-trash"></i>
                </div>
                <div
                  onClick={this.showEdit}
                  style={{ float: "right", cursor: "pointer" }}
                >
                  <i className="fas fa-edit"></i>
                </div>
              </>
            )}
            {cards.map((item, index) => (
              <Card
                info={item}
                key={item.id}
                listId={id}
                index={index}
                provided={provided}
                innerRef={provided.innerRef}
              />
            ))}
            <div className="grey_text">
              {showCard ? (
                <>
                  <textarea
                    id="new_card"
                    name="info"
                    rows="4"
                    cols="34"
                    className="input"
                    placeholder="Enter your details"
                    autoFocus
                    onChange={this.handleInput}
                    value={info}
                  ></textarea>
                  <div className="btn_container">
                    <input
                      type="submit"
                      value="Add Card"
                      className="btn"
                      onMouseDown={this.addCard}
                    />
                    <div className="cancel_btn" onClick={this.hideCard}>
                      X
                    </div>
                  </div>
                </>
              ) : (
                <div onClick={this.showCard}>
                  <span>Add a card...</span>
                </div>
              )}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.board,
});

export default connect(mapStateToProps)(list);
