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
          label: "All notes",
          buttonEdit: "Edit",
          buttonSave: "Save",
          buttonDelete: "Delete",
        },
        ru: {
          label: "Все заметки",
          buttonEdit: "Изменить",
          buttonSave: "Сохранить",
          buttonDelete: "Удалить",
        },
      },
      buttonRu: "Ru",
      buttonEng: "Eng",
      buttonAdd: "Add",
      label: "Enter note",
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

  setRu = () => {
    this.setState({
      buttonRu: "РУ",
      buttonEng: "АНГ",
      buttonAdd: "Добавить",
      label: "Введите заметку",
      locale: "ru",
    });
    document.getElementById("butRu").className = "btn btn-dark lang";
    document.getElementById("butEng").className = "btn btn-light lang";
  };

  setEng = () => {
    this.setState({
      buttonRu: "RU",
      buttonEng: "ENG",
      buttonAdd: "Add",
      label: "Enter note",
      locale: "eng",
    });
    document.getElementById("butRu").className = "btn btn-light lang";
    document.getElementById("butEng").className = "btn btn-dark lang";
  };

  render() {
    const { label, notes, locale, lang, editId, editNote } = this.state;
    return (
      <div className="container">
        <div className="row-lang">
          <button id="butRu" className="btn btn-ligh lang" onClick={this.setRu}>
            {this.state.buttonRu}
          </button>
          <button id="butEng" className="btn btn-dark lang" onClick={this.setEng}>
            {this.state.buttonEng}
          </button>
          <br />
        </div>
        <div>
          <label>{label}</label>
        </div>
        <input
          maxLength="80"
          className="form-control add"
          type="text"
          onChange={this.noteChange}
        />
        <br />
        <button className="btn btn-dark add" onClick={this.add}>
          {this.state.buttonAdd}
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
