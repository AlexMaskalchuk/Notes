import React from "react";
import { Link } from "react-router-dom";
import { printNote } from "./printNote";

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
            {
              return(printNote(
                id,
                note,
                lang,
                locale,
                onEdit,
                onSave,
                onDelete,
                editId,
                editNote,
                editNoteChange
              ))
              
            }
          })}
        </div>
      </div>
    );
  }
}
export default ListComponent;
