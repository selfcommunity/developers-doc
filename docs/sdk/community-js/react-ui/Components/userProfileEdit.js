import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function App () {
    return (
        <BrowserOnly>
            {() => {
                const UserProfileEdit = require('@selfcommunity/react-ui').UserProfileEdit;
                const SCUserFields = require ('@selfcommunity/react-ui').SCUserProfileFields;
                const fields = [
                    SCUserFields.USERNAME,
                    SCUserFields.REAL_NAME,
                    SCUserFields.DATE_JOINED,
                    SCUserFields.DATE_OF_BIRTH,
                    SCUserFields.DESCRIPTION,
                    SCUserFields.WEBSITE,
                    SCUserFields.BIO,
                    SCUserFields.LOCATION,
                    SCUserFields.GENDER
                ];
                return <UserProfileEdit userId={18} fields={fields} UserProfileEditSectionAccountProps={{showCredentialsSection: true}}/>;
            }}
        </BrowserOnly>
    );
}




