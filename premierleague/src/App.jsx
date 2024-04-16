import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MatchList from './components/MatchList';


const App = () => {
  return (
    <Provider store={store}>
      <div>
        <MatchList />
      </div>
    </Provider>
  );
};

export default App;