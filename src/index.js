import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import "../css/main.css"

import App from "./App"



render(<Router><App/></Router>, document.querySelector('#app'))