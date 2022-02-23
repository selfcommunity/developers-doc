import React from 'react';
import config from '../../conf';
import {SCContextProvider} from '@selfcommunity/core';
import {TrendingPeople} from '@selfcommunity/ui';


export default function App () {
    return (
        <SCContextProvider conf={config}><TrendingPeople categoryId={2}/></SCContextProvider>
    );
}




