import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddWindow from './addWindow';

export default function Todo() {
  const listItems = useSelector(state => state.listItems);
  
  const [value, setValue] = useState('');


  const renderTodo = (todo, path) => (
    <li key={`todo-${path.join('')}`}>
      <p>{todo.get('title') === 'head' ? null : todo.get('title')}</p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      {/* <button onClick={() => handleAddNested(path)}>+</button> */}
      <ul>
        {todo.get('data').map((_todo, _idx) => renderTodo(_todo, [...path, _idx]))}
      </ul>
    </li>
  )

  return (
    <ul>
      {listItems.map((todo, x) => renderTodo(todo, [x]))}
      <AddWindow />
    </ul>
  );
};