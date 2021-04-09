//import React from 'react';
import './main.css';

const linksData = [
  {
    to: '/timer',
    text: 'Timer'
  }
];

const Main = (props: {children: Object}) => {
  return(
    <div>
      <div className="content-container">
        {props.children}
      </div>
    </div>
  )
};

export default Main;
