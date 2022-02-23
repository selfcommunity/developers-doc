import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {CustomAdv} from '@selfcommunity/ui';


export default function App () {
    return (
        <SCContextProvider conf={config}><CustomAdv/></SCContextProvider>
    );
}




