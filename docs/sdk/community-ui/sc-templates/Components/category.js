import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {Category} from '@selfcommunity/templates';


export default function App () {
    return (
        <SCContextProvider conf={config}><Category/></SCContextProvider>
    );
}




