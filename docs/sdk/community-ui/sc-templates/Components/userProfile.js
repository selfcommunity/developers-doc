import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {UserProfile} from '@selfcommunity/templates';


export default function App () {
    return (
        <SCContextProvider conf={config}><UserProfile/></SCContextProvider>
    );
}




