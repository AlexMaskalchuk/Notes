import React from 'react';

class Note extends React.Component{
    constructor(props){

        super(props);
        this.state = {
            note: {id: 0, note: 'asd'}
        }
     
      }

    
    render(){
    
        return(<div>{this.props.match.params.id}</div>)
    }
        
}
export default Note;