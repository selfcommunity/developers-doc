import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import {SCUserProfileFields as SCUserFields} from "@selfcommunity/react-ui";

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UserProfileInfo = require('@selfcommunity/react-ui').UserProfileInfo;
                const SCUserProfileFields = require ('@selfcommunity/react-ui').SCUserProfileFields;
                const fields = [
                    SCUserProfileFields.TAGS,
                    SCUserProfileFields.REAL_NAME,
                    SCUserProfileFields.DATE_JOINED,
                    SCUserProfileFields.DATE_OF_BIRTH,
                    SCUserProfileFields.DESCRIPTION,
                    SCUserProfileFields.WEBSITE,
                    SCUserProfileFields.BIO
                ];
                return <UserProfileInfo userId={18} fields={fields}/>;
            }}
        </BrowserOnly>
    );
}




