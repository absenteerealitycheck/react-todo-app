import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Delete from '@material-ui/icons/Delete';




class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state={checked:false};
        this.clickHandler = this.clickHandler.bind(this);
        this.toggleHandler = this.toggleHandler.bind(this);
    }
    clickHandler(e){
      e.preventDefault();
      this.props.delete(this.props.id, this.state.checked);
    }
    toggleHandler(e){
      e.preventDefault();
      let newState = !this.state.checked;
      this.props.toggleItem(newState);
      this.setState({checked:newState});
    }
    render() {
          return (

     <ListItem>
       <ListItemText
         primary={this.props.todo}
         secondary= {this.props.desc}
       />
       <ListItemSecondaryAction>
       <Checkbox
            checked={this.state.checked}
            tabIndex={-1}
            disableRipple
            onClick={this.toggleHandler}
          />
         <IconButton aria-label="Delete" onClick={this.clickHandler}>
           <Delete />
         </IconButton>
       </ListItemSecondaryAction>
     </ListItem>

  );
    }
}
export default TodoItem;
