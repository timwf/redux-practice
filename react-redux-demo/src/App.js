import React from 'react';
import './App.css';
import CakeContainer from './components/CakeContainer'
import store from './redux/store'
import { Provider} from 'react-redux'
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ItemContainer />
      <ItemContainer cake/>
      <IceCreamContainer />
      <CakeContainer />
      <HooksCakeContainer />
      <NewCakeContainer />
    </div>
    </Provider>

  );
}


export default App;
