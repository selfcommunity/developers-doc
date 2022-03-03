import React from 'react';
import {SCContextProvider} from '@selfcommunity/core';
import {sessionData} from "./sessionData";
import BrowserOnly from '@docusaurus/BrowserOnly';

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
        <BrowserOnly>
            {() => <SCContextProvider conf={_conf}>
                {children}
            </SCContextProvider>}
        </BrowserOnly>
    );
};
