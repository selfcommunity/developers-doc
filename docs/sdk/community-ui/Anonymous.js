import React from 'react';
import {SCContextProvider} from '@selfcommunity/core';
import {sessionData} from "./sessionData";

export default function Anonymous({children}) {

    const _conf = {
        portal: sessionData.portal,
        locale: {default: 'en'},
        session: {
            type: 'OAuth',
            clientId: sessionData.user.client_id
        },
        theme: {},
        handleAnonymousAction: () => {
            alert('Anonymous action');
        }
    };

    return (
        <SCContextProvider conf={_conf}>
            {children}
        </SCContextProvider>
    );
};