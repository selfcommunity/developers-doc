import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {CategoriesPopular} from '@selfcommunity/ui';


export default function App () {
    return (
        <SCContextProvider conf={config}><CategoriesPopular/></SCContextProvider>
    );
}




