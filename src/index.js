// import React from 'react';
// import  ReactDOM from 'react-dom';

// import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'));


// ********************************************************
// Had to use this solution from stack-overflow since ReactDOM.render has been depreciated in react 18

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);