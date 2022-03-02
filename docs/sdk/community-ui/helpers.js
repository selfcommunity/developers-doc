/**
 * Helper send request
 * @param url
 * @param data
 * @returns {Promise<Response>}
 */
import {sessionData} from "./sessionData";

function postData(url = '', data = {}) {
    const formBody = Object.keys(data).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])).join('&');
    return fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'content-type': 'application/x-www-form-urlencoded',
        },
        body: formBody,
    });
}

/**
 * Helper getOAuthSession
 */
export function getOAuthSession() {
    return postData(`${sessionData.portal}/oauth/token/`, sessionData.user)
        .then(res => res.json())
        .then(res => {
            return {
                'accessToken': res.access_token,
                'refreshToken': res.refresh_token,
                'tokenType': res.token_type,
                'expiresIn': res.expires_in
            };
        }).catch((error) => {
            return error;
        });
}

/**
 * Helper refreshToken
 */
export function refreshToken() {
    const stored = JSON.parse(window.localStorage.getItem("token"));
    const data = {
        'refresh_token': stored.refresh_token,
        'client_id': sessionData.user.client_id,
        'grant_type': 'refresh_token',
    };
    return postData(`${sessionData.portal}/oauth/token/`, data)
        .then(res => res.json())
        .then(res => {
            return {
                'accessToken': res.access_token,
                'refreshToken': res.refresh_token,
                'tokenType': res.token_type,
                'expiresIn': res.expires_in
            };
        }).catch((error) => {
            return Promise.reject(error);
        });
}