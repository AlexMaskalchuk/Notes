import React from "react";
import { Link } from "react-router-dom";

const printNote = (id, note, lang, locale, onEdit, onSave, onDelete, editId, editNote ,editNoteChange) => {
  return (
    <div key={id} className="row">
      {editId !== id ? (
        <div className="cell-p">
          <Link to={`/Note/${id}`}>
            <p
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
      <div className="btn-group mr-2" role="group" aria-label="First group">
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
};
export {printNote};
