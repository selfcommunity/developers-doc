import React from 'react';
import {useState, useEffect} from 'react';
import {getOAuthSession} from "./helpers";
import useIsBrowser from '@docusaurus/useIsBrowser';

export const stored = () => {
    const isBrowser = useIsBrowser();
    if (isBrowser) {
       return JSON.parse(window.localStorage.getItem("token"));
    }

}

export function useAuthToken() {
    const isBrowser = useIsBrowser();
    const [authToken, setAuthToken] = useState(stored);

    useEffect(() => {
        if (!isBrowser) {
            return;
        }
        if (!authToken || authToken.expiresIn * 1000 < Date.now()) {
            getOAuthSession().then((res) => {
                setAuthToken(res);
            });
        } else {
            setAuthToken(stored);
        }

    }, [isBrowser]);

    useEffect(() => {
        if (isBrowser) {
            window.localStorage.setItem("token", JSON.stringify(authToken));
        }
    }, [isBrowser, authToken]);

    return authToken;
}


