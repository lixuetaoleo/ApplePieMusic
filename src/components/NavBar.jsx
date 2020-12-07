import React from 'react';
import { Link } from 'react-router-dom';
import style from './navbar.module.less';

export default function () {
  return (
    <div className={style['nav-bar']}>
      <Link to='/'>资料库</Link>
      <Link to='/recommend'>现在就听</Link>
      <Link to='/search'>搜索</Link>
    </div>
  );
}
