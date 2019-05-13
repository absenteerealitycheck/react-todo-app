import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


class TodoListInput extends React.Component {
  constructor(props){
    super(props);
    this.state= this.getInitialState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  getInitialState(){
     const initialState = {
       title:'',
       description:''
     };
     return initialState;
   }
  handleInputChange(e){
    e.preventDefault();
    this.setState({
    [e.target.name]: e.target.value
    });

  }
  onClick(e){
    e.preventDefault();
    this.props.onClick(this.state.title, this.state.description);
    this.setState(this.getInitialState());


  }

  render(){
    return (
      <div className="input-container">
      <Paper>
      <form>
      <TextField
        id="todo-title-input"
        label="Todo"
        className='task-title-input'
        name = 'title'
        margin="normal"
        value={this.state.title}
        onChange={this.handleInputChange}></TextField>
        <br/>
        <TextField
          id="todo-desc-input"
          name = "description"
          label="Additional Details"
          multiline
          rowsMax="6"
          className='task-desc-input'
          value={this.state.description}
          onChange={this.handleInputChange}
          margin="normal"></TextField>
      </form>
      <Button variant="contained" color="primary" onClick={this.onClick}> Add Todo<SaveIcon></SaveIcon></Button>
      </Paper>
      </div>
    );


  }

}

export default TodoListInput;
