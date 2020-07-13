import React from "react";
import { Link } from "react-router-dom";


class ListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  getNode = (id) => {};

  render() {
    const {
      notes,
      lang,
      locale,
      onEdit,
      onSave,
      onDelete,
      editId,
      editNote,
      editNoteChange,
    } = this.props;
    return (
      <div className="container">
        <div>{lang[locale].labelAll}</div>
        <div>
          {notes.map(({ id, note }, index) => {
            return (
              <div key={id} className="row">
                {editId !== id ? (
                  <div className="cell-p">
                    <Link to={`/Note/${id}`}>
                      <p
                        onClick={this.getNode(id)}
                        className="list-group-item list-group-item-light"
                        id={id}
                      >
                        {note}
                      </p>
                    </Link>
                  </div>
                ) : (
                  <div className="cell-p">
                    <input
                      onChange={editNoteChange}
                      value={editNote}
                      className="form-control edit"
                      id={id}
                    />
                  </div>
                )}
                <div
                  className="btn-group mr-2"
                  role="group"
                  aria-label="First group"
                >
                  {editId !== id ? (
                    <div className="cell">
                      <button
                        type="button"
                        className="btn btn-secondary custom-button"
                        onClick={(event) => onEdit(id)}
                      >
                        {lang[locale].buttonEdit}
                      </button>
                    </div>
                  ) : (
                    <div className="cell">
                      <button
                        className="btn btn-secondary custom-button"
                        onClick={(event) => onSave(id)}
                      >
                        {lang[locale].buttonSave}
                      </button>
                    </div>
                  )}
                  <div className="cell">
                    <button
                      className="btn btn-secondary custom-button"
                      onClick={(event) => onDelete(id)}
                    >
                      {lang[locale].buttonDelete}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default ListComponent;
