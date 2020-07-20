import React from 'react';
import Home from './Home';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import rootReducer from './store/reducer';
import {Provider} from 'react-redux';
const store = createStore(rootReducer);
console.log(store.getState());

class App extends React.Component {
  render() {
    return (
      <Provider store = {store}>
        <Home />
      </Provider>
    );  
  }
}
export default App;
