import React from 'react';
import style from './pagetitle.module.less';

function PageTitle(props) {
  return (
    <div className={style['text']}>
      {props.children}
    </div>
  );
}

export default PageTitle;
