import React, { Component } from "react";
import List from "./list";
import { connect } from "react-redux";
import { addList, dnd } from "../action";
import { DragDropContext } from "react-beautiful-dnd";

class board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCard: false,
      info: "",
    };
  }

  addList = () => {
    const { dispatch } = this.props;
    const { info } = this.state;
    if (info) {
      dispatch(addList(info));
      this.setState({
        info: "",
        showCard: false,
      });
    }
    return;
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

  handleInput = (e) => {
    this.setState({
      info: e.target.value,
    });
  };

  onDragEnd = (result) => {
    const { dispatch } = this.props;
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    } else {
      dispatch(
        dnd(
          source.droppableId,
          destination.droppableId,
          source.index,
          destination.index,
          draggableId
        )
      );
    }
  };

  render() {
    const { list } = this.props;
    console.log(this.props);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <div className="container">
            {list.length > 0
              ? list.map((item) => (
                  <List
                    heading={item.title}
                    cards={item.cards}
                    key={item.id}
                    id={item.id}
                  />
                ))
              : null}
            {this.state.showCard ? (
              <div className="list_container">
                <textarea
                  id="new_card"
                  name="new_card"
                  rows="1"
                  cols="34"
                  className="input"
                  placeholder="Enter List title"
                  autoFocus
                  onChange={this.handleInput}
                  value={this.state.info}
                ></textarea>
                <div className="btn_container">
                  <input
                    type="submit"
                    value="Add List"
                    className="btn"
                    onMouseDown={this.addList}
                  />
                  <div
                    className="cancel_btn grey_text"
                    onMouseDown={this.hideCard}
                  >
                    X
                  </div>
                </div>
              </div>
            ) : (
              <div className="add_list" onClick={this.showCard}>
                <span>Add a list...</span>
              </div>
            )}
          </div>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.board,
});

export default connect(mapStateToProps)(board);
