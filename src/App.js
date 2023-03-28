import logo from './logo.svg';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import Common from './Common/Common';

function App() {
  return (
    <Provider store={store}>
      <Common/>
    </Provider>
  );
}

export default App;
