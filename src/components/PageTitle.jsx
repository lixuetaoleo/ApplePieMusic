import React from 'react';
import style from './pagetitle.module.scss';

function PageTitle(props) {
  return (
    <div className={style['text']}>
      {props.children}
    </div>
  );
}

export default PageTitle;
