import React from 'react'
import { Input, Button, List } from 'antd';
const TodoListUI = (props) => {
  return (
    <div style={{ marginTop: '10px', marginLeft: '10px' }}>
      <Input value={props.inputValue} placeholder="输入内容"
        style={{ width: '300px', marginRight: '10px' }}
        onChange={props.handleInputChange} />
      <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
      <List
        style={{ width: '300px', marginTop: '10px' }}
        size="small"
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => { props.handleItemDelete(index) }}>{item}</List.Item>)}
      />
    </div>
  )
}
export default TodoListUI;

