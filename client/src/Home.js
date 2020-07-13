import React from "react";
import "./App.scss";
import ListComponent from "./ListComponent.js";
//import {Button} from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: {
        eng: {
          labelAll: "All notes",
          buttonEdit: "Edit",
          buttonSave: "Save",
          buttonDelete: "Delete",
          buttonRu: "Ru",
          buttonEng: "Eng",
          buttonAdd: "Add",
          label: "Enter note",
        },
        ru: {
          labelAll: "Все заметки",
          buttonEdit: "Изменить",
          buttonSave: "Сохранить",
          buttonDelete: "Удалить",
          buttonRu: "Ру",
          buttonEng: "Анг",
          buttonAdd: "Добавить",
          label: "Введите заметку",
        },
      },
      locale: "eng",
      notes: [],
      note: "",
      id: 0,
      editId: "",
      editNote: "",
    };
  }

  async callAPI() {
    let response = await fetch("http://localhost:9000/notes", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    let notes = await response.json();
    this.setState({ notes: notes, id: notes.length });
  }

  componentDidMount() {
    this.callAPI();
  }

  noteChange = (event, id) => {
    this.setState({ note: event.target.value });
  };

  editNoteChange = (event) => {
    this.setState({ editNote: event.target.value });
  };

  add = async () => {
    const note = this.state.note;
    let response = await fetch(`http://localhost:9000/notes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ note }),
    });
    const notes = await response.json();
    this.setState({ notes: notes });
  };

  save = async (id) => {
    this.setState({ editId: "" });
    const input = document.getElementById(id);
    let response = await fetch(`http://localhost:9000/notes/${id}`, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ note: input.value }),
    });
    const notes = await response.json();
    this.setState({ notes: notes });
  };

  edit = (id) => {
    const note = this.state.notes.find((item) => {
      return item.id === id;
    });
    this.setState({ editId: id, editNote: note.note });
  };

  delete = async (id) => {
    let response = await fetch(`http://localhost:9000/notes/${id}`, {
      method: "DELETE",
    });
    const notes = await response.json();
    this.setState({ notes: notes });
  };

  setLanguage = (locale) => {
    this.setState({ locale: locale });
  };

  getClassName = (locale) => {
    if (locale === this.state.locale) {
      return "btn btn-dark lang";
    } else {
      return "btn btn-light lang";
    }
  };

  render() {
    const { label, notes, locale, lang, editId, editNote } = this.state;

    return (
      <div className="container">
        <div className="row-lang">
          <button
            id="butRu"
            className={this.getClassName("ru")}
            onClick={() => this.setLanguage("ru")}
          >
            {lang[locale].buttonRu}
          </button>
          <button
            id="butEng"
            className={this.getClassName("eng")}
            onClick={() => this.setLanguage("eng")}
          >
            {lang[locale].buttonEng}
          </button>
          <br />
        </div>
        <div>
          <label>{lang[locale].label}</label>
        </div>
        <input
          maxLength="80"
          className="form-control add"
          type="text"
          onChange={this.noteChange}
        />
        <br />
        <button className="btn btn-dark add" onClick={this.add}>
          {lang[locale].buttonAdd}
        </button>
        <br />
        <div></div>
        <ListComponent
          notes={notes}
          onDelete={this.delete}
          onEdit={this.edit}
          onSave={this.save}
          editNoteChange={this.editNoteChange}
          locale={locale}
          lang={lang}
          editId={editId}
          editNote={editNote}
        />
      </div>
    );
  }
}
export default Home;
