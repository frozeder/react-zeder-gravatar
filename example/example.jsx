import React from 'react';
import ReactDOM from 'react-dom';
import Gravatar from '../lib';


ReactDOM.render(
    <div>
        <Gravatar
            name = 'test name'
            className = 'test'
            size = {150}
        />
        <Gravatar
            name = 'test name'
        />
        <Gravatar
            email = 'test@gmail.com'
            className = 'test'
        />
        <Gravatar
            email = 'somer@ndomexample.com'
            name = 'firstname lastname'
            className = 'test'
            size = {100}
        />
    </div>,
    document.getElementById('block')
);
