/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Recommend from './pages/Recommend/index';
import Home from './pages/Home/index';
import Search from './pages/Search/index';
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
