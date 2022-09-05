import ReactDOM from 'react-dom';
import APP from './App';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// ReactDOM.render(<APP/>,document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
    <APP/>
    </BrowserRouter>, 
    document.getElementById('root')
)

