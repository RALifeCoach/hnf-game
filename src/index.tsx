import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const allcookies:string = document.cookie;
const cookieArray: Array<string> = allcookies.split(';');

const cookies: any = cookieArray.reduce((cookies, item) => Object.assign(cookies, {
    [item.split('=')[0]]: item.split('=')[1]
}))

ReactDOM.render(<App cookies={cookies} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
