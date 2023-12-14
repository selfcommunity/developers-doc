import React from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import {useState, useEffect} from 'react';
import {getOAuthSession} from "./helpers";

export function useAuthToken() {
    const isBrowser = useIsBrowser();
    const [authToken, setAuthToken] = useState(isBrowser ? JSON.parse(window.localStorage.getItem("token")) : '');

    useEffect(() => {
        if (!isBrowser) {
            return;
        }
        if (!authToken || authToken.expiresIn * 1000 < Date.now()) {
            getOAuthSession().then((res) => {
                setAuthToken(res);
            });
        } else {
            isBrowser && setAuthToken(JSON.parse(window.localStorage.getItem("token")));
        }

    }, [isBrowser]);

    useEffect(() => {
        if (isBrowser) {
            window.localStorage.setItem("token", JSON.stringify(authToken));
        }
    }, [isBrowser, authToken]);

    return authToken;
}

