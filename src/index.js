import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'Yulia' },
  { id: 2, name: 'Valeria' },
  { id: 3, name: 'Ekaterina' }
];

let messagesData = [
  { id: 1, message: 'Hii!' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Yo' }
];

let postsData = [
  { id: 1, message: 'Yulia', likesCount: 15 },
  { id: 2, message: 'Valeria', likesCount: 20 }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={postsData} dialogs={dialogsData} messages={messagesData} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
