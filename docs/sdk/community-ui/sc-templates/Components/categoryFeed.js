import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {CategoryFeed} from '@selfcommunity/templates';


export default function App () {
    return (
        <SCContextProvider conf={config}><CategoryFeed/></SCContextProvider>
    );
}




