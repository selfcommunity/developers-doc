import {sessionData} from "./sc-ui/sessionData";
import {authToken, refreshToken} from "./helpers";

const config = {
    portal: sessionData.portal,
    session: {
        type: 'OAuth',
        clientId: sessionData.user.client_id,
        authToken: authToken,
        handleRefreshToken: refreshToken(),
    },
};

export default config;