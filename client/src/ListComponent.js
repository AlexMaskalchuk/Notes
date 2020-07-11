import React from 'react';
import {Redirect} from 'react-router-dom';

class ListComponent extends React.Component{
    constructor(props){
        super(props);
      }
    
    getNode = (id) => {
        console.log(123);
    }
    
    render(){
        const {notes, lang, locale, onEdit, onSave, onDelete} = this.props;
        return(
        <div className = 'container'>
            <div>{lang[locale].label}</div>
            <div>
            {notes.map(({id,note} , index)=>{
                return(                   
                    <div class= 'row'>
                        <div class="cell-p"><p onClick = {this.getNode(id)} class="list-group-item list-group-item-light" id = {id}>{note}</p></div>
                        <div class="btn-group mr-2" role="group" aria-label="First group">
                            <div class="cell"><button type="button" class="btn btn-secondary custom-button" onClick ={(event) => onEdit(id)}>{lang[locale].buttonEdit}</button></div>
                            <div class="cell"><button class="btn btn-secondary custom-button"  onClick={(event) => onSave(id)}>{lang[locale].buttonSave}</button></div>
                            <div class="cell"><button class="btn btn-secondary custom-button" onClick={(event) => onDelete(id)}>{lang[locale].buttonDelete}</button></div>  
                        </div>
                    </div>    
                    )}
                    )}
            </div>
        </div>)
    }
        
}
export default ListComponent;