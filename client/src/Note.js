import React from "react";
import { Link } from "react-router-dom";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
    };
  }

  async componentDidMount() {
    let response = await fetch(
      `http://localhost:9000/notes/${this.props.match.params.id}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    let note = await response.json();
    this.setState({ note: note });
  }

  render() {
    return (
      <div className="container-note">
          <div className="cell-p"> <p className="list-group-item list-group-item-light">
          {this.state.note.note}
        </p></div>
       
        <div className="cell">
            <Link to={'/'}><button className="btn btn-secondary custom-button">To Notes</button></Link>
        </div>
      </div>
    );
  }
}
export default Note;
