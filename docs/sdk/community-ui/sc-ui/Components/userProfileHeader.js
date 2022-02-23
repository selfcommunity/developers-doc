import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {UserProfileHeader} from '@selfcommunity/ui';


export default function App () {
    return (
        <SCContextProvider conf={config}><UserProfileHeader/></SCContextProvider>
    );
}




