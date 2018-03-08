import React from 'react';
import { APP_NAME } from '../shared/config';
import Display from './containers/Display';

const App = () => (
    <div>
        <h1>{APP_NAME}</h1>
        <Display />
    </div>
);

export default App;
