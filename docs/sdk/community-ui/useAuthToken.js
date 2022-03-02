import React from 'react';
import {useState, useEffect} from 'react';
import {getOAuthSession} from "./helpers";

const stored = JSON.parse(window.localStorage.getItem("token"));

export function useAuthToken() {
    const [authToken, setAuthToken] = useState(stored);

    useEffect(() => {
        if (!authToken || authToken.expiresIn * 1000 < Date.now()) {
            getOAuthSession().then((res) => {
                setAuthToken(res);
            });
        } else {
            setAuthToken(stored);
        }

    }, []);

    useEffect(() => {
        window.localStorage.setItem("token", JSON.stringify(authToken));
    }, [authToken]);

    return authToken;
}


