import React from 'react';
import {sessionData} from "./sessionData";
import {useAuthToken} from "./useAuthToken";
import {SCContextProvider} from '@selfcommunity/core';
import {refreshToken} from "./helpers";
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function Logged ({children}) {
    const authToken = useAuthToken();

    const _conf = {
        portal: sessionData.portal,
        locale: {default: 'en'},
        session: {
            type: 'OAuth',
            clientId: sessionData.user.client_id,
            authToken: authToken,
            handleRefreshToken: refreshToken,
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
