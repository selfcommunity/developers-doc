import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {MainFeed} from '@selfcommunity/templates';


export default function App () {
    return (
        <SCContextProvider conf={config}><MainFeed/></SCContextProvider>
    );
}




