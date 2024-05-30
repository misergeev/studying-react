import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello World!';

const elem = (
  <div>
    <h2 className=''>Текст: {text}</h2>
    <input type="text" id="name"/>
    <label htmlFor="name"></label>
    <button tabIndex="0">Click</button>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);
