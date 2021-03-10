import { Provider } from 'react-redux';
import store from './store';
import Todo from './components/todo';
import './App.css';

function App() {
  
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
