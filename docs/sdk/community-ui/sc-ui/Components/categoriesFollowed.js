import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {CategoriesFollowed} from '@selfcommunity/ui';


export default function App () {
    return (
        <SCContextProvider conf={config}><CategoriesFollowed/></SCContextProvider>
    );
}




