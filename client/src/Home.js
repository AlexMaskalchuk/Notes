import React from 'react';
import './App.scss';
import ListComponent from './ListComponent.js';
//import {Button} from 'react-bootstrap';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: {
        eng: {
          label: 'All notes',
          buttonEdit: 'Edit',
          buttonSave: 'Save',
          buttonDelete: 'Delete',
        },
        ru: {
          label: 'Все заметки',
          buttonEdit: 'Изменить',
          buttonSave: 'Сохранить',
          buttonDelete: 'Удалить',
        },
      
      },
      buttonRu: 'Ru',
      buttonEng: 'Eng',
      buttonAdd: 'Add',
      label: 'Enter note',
      locale: 'eng',
      notes: [],
      note: '',
      id: '',
    }
  }

  async callAPI() {
    let response = await fetch("http://localhost:9000/testAPI", { method: 'GET' });
    let notes = await response.json();
    let c = new Date;

    this.setState({ notes: notes, id: c });
  }

  componentDidMount() {
    this.callAPI();
  }


  noteChange = (event, id) => {
    this.setState({ note: event.target.value });
  }

  add = async () => {
    const note = {
      id: this.state.id,
      note: this.state.note,
    }
    console.log(note);
    this.setState({ notes: [...this.state.notes, note], id: new Date });
    console.log('notes');
    console.log(this.state.notes);
    let response = await fetch(`http://localhost:9000/testAPI`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(note) });
  }

  save = async (id) => { 
    let a; 
    const tmp  = this.state.notes.map((item, index) =>{
      if(item.id === id){
        a = item.note = document.getElementById(id).value;
      } 
      return item;
    })
    console.log("tmp " );
    console.log( tmp);
    const input = document.getElementById(id);
    const p = document.createElement('p');
    p.id = id;
    p.className ='list-group-item list-group-item-light';
    p.innerText = a;
    input.parentNode.replaceChild(p, input);
    
    this.setState({ notes: tmp})
    console.log("notes " );
    console.log(this.state.notes);
    let f = a;
    
    let response = await fetch(`http://localhost:9000/testAPI/:${id}`, { method: 'PUT', headers: new Headers ({ 'Content-Type': 'application/json' }), body: JSON.stringify({note: f})});
    let isDeleted = await response.json();
    console.log(isDeleted);
  }

  edit = (id) => {
    const p = document.getElementById(id);
    const input = document.createElement('input');
    input.className = 'form-control edit';
    input.maxLength = '80';
    p.parentNode.replaceChild(input, p);
    input.id = id;
  }

  delete = async (id) => {
    const tempNotes = this.state.notes.filter(function (item) {
      return item.id !== id;
    })
    console.log("tmp " );
    console.log(tempNotes);
    this.setState({notes: tempNotes });
    console.log("notes " );
    console.log(this.state.notes);
    let response = await fetch(`http://localhost:9000/testAPI/:${id}`, { method: 'DELETE' });
    let isDeleted = await response.text();
    console.log(isDeleted);
  }

  setRu = () =>{
    this.setState({buttonRu: 'РУ', buttonEng: 'АНГ', buttonAdd: 'Добавить', label: 'Введите заметку', locale: 'ru'});
    document.getElementById('butRu').className = 'btn btn-dark';
    document.getElementById('butEng').className = 'btn btn-light';
  }

  setEng = () =>{
    this.setState({buttonRu: 'RU', buttonEng: 'ENG',buttonAdd: 'Add', label: 'Enter note', locale: 'eng'});
    document.getElementById('butRu').className = 'btn btn-light';
    document.getElementById('butEng').className = 'btn btn-dark';
  }

  render() {
    console.log(this.state.notes.length);
    
    return (
      <div className='container'>
         <div className='row-lang'>
          <button id = 'butRu' class="btn btn-light" onClick = {this.setRu}>{this.state.buttonRu}</button><button id = 'butEng' class="btn btn-dark" onClick = {this.setEng}>{this.state.buttonEng}</button><br/>
        </div>
        <div><label>{this.state.label}</label></div>
        <input maxLength = '80' class = 'form-control add'type='text' onChange={this.noteChange}/><br />
        <button class="btn btn-dark add" onClick={this.add}>{this.state.buttonAdd}</button><br/>
        <div></div>
        <ListComponent notes={this.state.notes} onDelete={this.delete} onEdit={this.edit} onSave={this.save} locale = {this.state.locale} lang = {this.state.lang} />
      </div>
    );
    
  }
}
export default Home;
