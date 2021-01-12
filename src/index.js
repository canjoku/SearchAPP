import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/index.css";
import "../css/footer.css";

import App from "./App"



render(<Router><App/></Router>, document.querySelector('#app'))