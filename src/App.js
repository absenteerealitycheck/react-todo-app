import React from 'react';
import TodoListCard from './components/TodoListCard';
import TodoListInput from './components/TodoListInput';
import './App.css';
import $ from 'jquery';

class App extends React.Component{
  constructor(props) {
      super(props);
      this.state={items:[], checked:0};
      this.addItem = this.addItem.bind(this);
      this.removeItem = this.removeItem.bind(this);
      this.toggleItem =this.toggleItem.bind(this);
  }
  addItem (title, description) {
    const newItem = {
      id: new Date().getTime(),
      title,
      description
    };
    const newItems = this.state.items.concat([newItem]);
    $('#item-count').text(newItems.length);
    $('#unchecked-count').text(newItems.length - this.state.checked);

    this.setState({
      items: newItems
    })

  }
  toggleItem(checked){
    let newState= Object.assign({}, this.state).checked;
    if(checked){
      newState+=1;
    }else{
      newState -=1;
    }
    $('#unchecked-count').text(this.state.items.length - newState);

    this.setState({checked:newState});

  }
  removeItem(id, checked){
    let newItems = this.state.items.filter(obj => obj.id !== id);
    $('#item-count').text(newItems.length);
    let unchecked = (checked) ?this.state.items.length - this.state.checked :newItems.length - this.state.checked;
    $('#unchecked-count').text(unchecked);
    this.setState({items: newItems});
  }
  render(){
    return (
      <div className="App">
        <TodoListInput onClick = {this.addItem} />
        <TodoListCard  todos={this.state.items} removeItem= {this.removeItem} checked={this.state.checked} toggleItem={this.toggleItem}/>
      </div>
    );
  }

}

export default App;
