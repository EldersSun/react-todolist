import React, { Component, Fragment } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreators'
class TodoList extends Component {

  // 最优先执行的函数
  constructor(props) {
    super(props);
    this.state = store.getState()

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick  = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange) // stroe 的数据
  }

  render () {
    return (
      <Fragment>
        <div style={{marginTop:'10px',marginLeft:'10px'}}>
          <Input value={this.state.inputValue} placeholder="输入内容" 
           style={{ width: '300px', marginRight: '10px'}}
           onChange={this.handleInputChange}/>
          <Button type="primary" onClick={this.handleBtnClick}>提交</Button>
          <List
            style={{ width: '300px', marginTop: '10px'}}
            size="small"
            bordered
            dataSource={this.state.list}
            renderItem={(item,index) => <List.Item onClick = {this.handleItemDelete.bind(this,index)}>{item}</List.Item>}
          />
        </div>
      </Fragment>
    )
  }

  handleInputChange(e){
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  handleBtnClick(){
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index){
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  handleStoreChange(){
    this.setState(store.getState())
  }
}

export default TodoList;