import React from 'react';
import { MdDelete } from 'react-icons/md';
import propTypes from 'prop-types';
import './styles.css';

const TodoList = ({ todos, onToggle, onRemove }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <li key={todo.id.toString()}>
        <span
          className={['todo', todo.checked ? 'checked' : ''].join(' ')}
          onClick={() => onToggle && onToggle(todo)}
          onKeyDown={() => onToggle && onToggle(todo)}
          role="button"
          tabIndex={0}
        >
          {todo.title}
        </span>
        <button
          className="remove"
          type="button"
          onClick={() => onRemove && onRemove(todo)}
        >
          <MdDelete size={28} />
        </button>
      </li>
    ))}
  </ul>
);

TodoList.propTypes = {
  todos: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      title: propTypes.string.isRequired,
      checked: propTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: propTypes.func.isRequired,
  onRemove: propTypes.func.isRequired,
};

export default TodoList;
