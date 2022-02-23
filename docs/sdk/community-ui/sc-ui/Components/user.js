import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {User} from '@selfcommunity/ui';


export default function App () {
    return (
        <SCContextProvider conf={config}><User/></SCContextProvider>
    );
}




