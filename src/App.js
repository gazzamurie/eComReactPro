import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInUpPage from './pages/sign-in-up/sign-in-up.component.jsx';
import Header from './components/header/header.component.jsx';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInUpPage} />
      </Switch>
    </div>
  );
}

export default App;
