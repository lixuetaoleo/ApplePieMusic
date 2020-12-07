import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Recommend from './pages/Recommend';
import Home from './pages/Home';
import Search from './pages/Search';
import NavBar from './components/NavBar';

export default function () {
  return (
    <div>
      <Switch>
        <Route path='/recommend'>
          <Recommend />
        </Route>
        <Route path='/search'>
          <Search />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      <NavBar />
    </div>
  );
}
