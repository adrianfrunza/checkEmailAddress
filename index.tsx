import * as React from 'react';
import  * as ReactDOM from 'react-dom';
import './src/style.css'

import App from "./src/js/components/App";
const wrapper = document.getElementById("mainApp");
wrapper ? ReactDOM.render(<App />, wrapper) : false;