import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {FollowCategoryButton} from '@selfcommunity/ui';


export default function App () {
    return (
        <SCContextProvider conf={config}><FollowCategoryButton/></SCContextProvider>
    );
}




