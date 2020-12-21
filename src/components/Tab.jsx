import React from 'react';
import style from './tab.module.less';

function Tab(props) {
 return (
   <div className={props.isSelected ? style['selected-tab'] : ''}>
     {props.children}
   </div>
 );
}

export default Tab;
