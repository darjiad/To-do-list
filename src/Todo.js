import React, { useState, useEffect } from 'react';
import './Todo.css';
import Delete from './trash.png';

function ListItem(props) {
  return (
    <div className='list-item row js-space-bet'>
      <span
        className={props.item.iscomplete ? 'task-complete' : ''}
        onClick={() => props.markitem(props.index)}
      >
        {props.item.desciption}
      </span>
      <img
        src={Delete}
        className='delete-icon'
        onClick={() => props.DeleteTask1(props.index)}
      />
    </div>
  );
}

function Todo() {
  const [taskInput, setTaskInput] = useState('');
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const storedTodo = localStorage.getItem('todo');
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  function AddItem() {
    const newTodo = [...todo, { desciption: taskInput, iscomplete: false }];
    setTodo(newTodo);
    setTaskInput('');
  }

  function inputkeydown(e) {
    if (e.keyCode === 13) {
      AddItem();
    }
  }

  function DeleteTask(index) {
    const newlist = todo.filter((item, i) => i !== index);
    setTodo(newlist);
  }

  function MarkComplete(index) {
    const list = [...todo];
    list[index].iscomplete = !list[index].iscomplete;
    setTodo(list);
  }

  return (
    <div className='background'>
      <p className='heading'>REACT TODO LIST ✍️</p>
      <div className='container'>
        <div>
          <input
            className='text_input'
            value={taskInput}
            onKeyDown={inputkeydown}
            onChange={(e) => {
              setTaskInput(e.target.value);
            }}
          />
          <button className='add-button' onClick={AddItem}>
            ADD
          </button>
        </div>
        {todo?.length ? (
          todo.map((val, index) => (
            <ListItem
              key={index}
              index={index}
              item={val}
              DeleteTask1={DeleteTask}
              markitem={MarkComplete}
            />
          ))
        ) : (
          <p className='no-item-text'>📌No Task Added !!!</p>
        )}
      </div>
      {/* <p className='footer-text'>By:Aditi Darji</p> */}
    </div>
  );
}

export default Todo;
