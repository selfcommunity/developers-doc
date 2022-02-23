import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {UserToastNotifications} from '@selfcommunity/ui';


export default function App () {
    return (
        <SCContextProvider conf={config}><UserToastNotifications/></SCContextProvider>
    );
}




