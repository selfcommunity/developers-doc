import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {NotificationFeed} from '@selfcommunity/templates';


export default function App () {
    return (
        <SCContextProvider conf={config}><NotificationFeed/></SCContextProvider>
    );
}




