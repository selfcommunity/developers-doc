import React from 'react';
import {sessionData} from "./sessionData";
import {useAuthToken} from "./useAuthToken";
import {SCContextProvider} from '@selfcommunity/react-core';
import {refreshToken} from "./helpers";
import BrowserOnly from '@docusaurus/BrowserOnly';


export default function Logged({children}) {
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
        theme: {
            palette: {
                primary: {
                    main: '#7baa5d'
                },
                secondary: {
                    main: '#4a8f62'
                }
            },
            components: {
                MuiIcon: {
                    defaultProps: {
                        // Replace the `material-icons` default value.
                        baseClassName: 'material-icons-outlined',
                    },
                },
            }
        },
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
