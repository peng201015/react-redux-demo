import React, { Component } from 'react';
import './index.css';
import { Input, Button, List } from "antd";
import 'antd/dist/antd.css';
import store from "./store";
import {getInputChangeAction,getAddItemAction,getItemDeleteAction} from './store/actionCreators'

class TodoList extends Component {
  constructor(props){
    super(props);
    // 在 constructor 中通过 store.getState() 方法来获取数据，并赋值为 state
    this.state = store.getState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    //  绑定方法 handleStoreChange 来处理 Redux 返回回来的数据
    this.handleStoreChange = this.handleStoreChange.bind(this);
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <div className="todo">
        <div className="todo-title">
          <h1>TodoList</h1>
        </div>
        <div className="todo-action">
          <Input placeholder="todo" className="todo-input" value={this.state.inputValue} onChange={this.handleInputChange}></Input>
          <Button type="primary" className="todo-submit" onClick={this.handleSubmit}>提交</Button>
        </div>
        <div className="todo-list">
          <List size="large" bordered dataSource={this.state.todoList}
          renderItem={(item,index) => (<List.Item onClick={this.handleDeleteItem.bind(this,index)}>{index+1}-{item}</List.Item>)}
          ></List>
        </div>
      </div>
    );
  }

  handleInputChange(e) {
    // 通过action将数据传给store
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleSubmit() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  // 在handleStoreChange中处理数据
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleDeleteItem(index) {
    const action = getItemDeleteAction(index)
    store.dispatch(action)
  }
}

export default TodoList;
