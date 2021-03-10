import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewItem } from '../store/modules/listItems';
import { Label, Button, Input, Select, Modal, Card, Header } from './styles';

export default function AddWindow() {
  const dispatch = useDispatch();
  const listItems = useSelector(state => state.listItems);
  const [value, setValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const handleAdd = (parent) => {
    dispatch(addNewItem({ parent: parent || [], item: value }))
    setModalOpen(false);
  };

  const renderOptions = (todo, path) => (
    <optgroup
      key={`todo-${path.join('')}`}
    >
      <p>{todo.get('title') === 'head' ? null : todo.get('title')}</p>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => handleAdd(path)}>+</button>
      <ul>
        {todo.get('data').map((_todo, _idx) => renderOptions(_todo, [...path, _idx]))}
      </ul>
    </optgroup>
  )

  return (
    <>
      <Button onClick={() => setModalOpen(true)}>Add Item</Button>
      <Modal
        show={modalOpen}
        onClick={() => setModalOpen(false)}
        onMouseOut={(event) => event.stopPropagation()}
      >
        <Card onClick={(event) => event.stopPropagation()}>
          <Header>Add item</Header>
          <Label>
            Parent element
            {' '}
            <Select>
              <optgroup>asda</optgroup>
              <option></option>
              <option>11</option>
              <option>11</option>
              <option>11</option>
            </Select>
          </Label>
          <Label>
            Title
            {' '}
            <Input
              placeholder="Text input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Label>
          <Button onClick={() => handleAdd()}>add</Button>
        </Card>
      </Modal>
    </>
  )
}