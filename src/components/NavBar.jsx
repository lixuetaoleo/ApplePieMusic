import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.less';
import Tab from './Tab';

function NavBar() {
  const [activeTab, setactiveTab] = useState(1);
  return (
    <div
      className={style['nav-bar']}
      onClick={setactiveTab}
    >
      <Tab tabIndex="1">
        {/* <img src='https://picsum.photos/20/20' alt=''></img> */}
        <Link to='/'>资料库</Link>
      </Tab>
      <Tab tabIndex="2">
        {/* <img src='https://picsum.photos/20/20' alt=''></img> */}
        <Link to='/recommend'>现在就听</Link>
      </Tab>
      <Tab tabIndex="3">
        {/* <img src='https://picsum.photos/20/20' alt=''></img> */}
        <Link to='/search'>搜索</Link>
      </Tab>
    </div>
  );
}

export default NavBar;
