import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {CommentsObject} from '@selfcommunity/ui';


export default function App () {
    return (
        <SCContextProvider conf={config}><CommentsObject/></SCContextProvider>
    );
}




