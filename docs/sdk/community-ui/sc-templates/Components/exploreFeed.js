import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {ExploreFeed} from '@selfcommunity/templates';


export default function App () {
    return (
        <SCContextProvider conf={config}><ExploreFeed/></SCContextProvider>
    );
}




