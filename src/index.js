/*
 * App
 */

'use strict';

require('babel-polyfill');
require('whatwg-fetch');

import App from './components/main.jsx';

// const props = JSON.parse(document.getElementById('props').innerHTML);
const props = {title: 'world'}

ReactDOM.render(
    <App {...props} />,
    document.getElementById('root')
);
