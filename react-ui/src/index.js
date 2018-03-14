/**
 * @version 0.0.1
 * @author [Rahul Verma](https://github.com/Verma92)
 */
// Importing React's Components and React's and Node Libraries
import { render } from 'react-dom';
import React from 'react';
import App from './Components/App';

const mountNode=document.getElementById('root')

render(<App/>,mountNode);
