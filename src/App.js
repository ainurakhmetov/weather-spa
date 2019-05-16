import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import WeatherPage from './pages/WeatherPage'
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/city/:id" component={WeatherPage} exact />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
