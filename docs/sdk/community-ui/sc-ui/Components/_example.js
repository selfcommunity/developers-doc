import React from 'react';
import config from './conf.js';
import {SCContextProvider} from '@selfcommunity/core';
import {xxx} from '@selfcommunity/ui';


export default function App () {
    return (
        <SCContextProvider conf={config}><xxx/></SCContextProvider>
    );
}




