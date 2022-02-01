import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import UsersList from './UsersList';

const rootElement = document.querySelector("#root");

ReactDOM.render(<UsersList users={users}/>, rootElement);