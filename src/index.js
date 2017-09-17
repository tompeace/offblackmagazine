/*
 * App
 */

'use strict';

require('babel-polyfill');
require('whatwg-fetch');

// const App = require('../components/app/app.jsx');
const App = (props) => (<div>hello {props.title}</div>)
// const props = JSON.parse(document.getElementById('props').innerHTML);
const props = {title: 'world'}

ReactDOM.render(
    <App {...props} />,
    document.getElementById('root')
);
