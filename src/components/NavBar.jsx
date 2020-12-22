import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.less';
import { Tab, Tabs, TabList } from 'react-tabs';

function NavBar() {
  return (
    <Tabs className={style['nav-bar']}>
      <TabList>
        <Tab>
          <img src='https://picsum.photos/20/20' alt=''></img>
          <Link to='/'>资料库</Link>
        </Tab>
        <Tab>
          <img src='https://picsum.photos/20/20' alt=''></img>
          <Link to='/recommend'>现在就听</Link>
        </Tab>
        <Tab>
          <img src='https://picsum.photos/20/20' alt=''></img>
          <Link to='/search'>搜索</Link>
        </Tab>
      </TabList>
    </Tabs>
  );
}

export default NavBar;
