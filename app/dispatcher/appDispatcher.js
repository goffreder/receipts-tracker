import { Dispatcher } from 'flux';

import { PayloadSources } from '../constants/actionTypes';

import assign from 'react/lib/Object.assign';

export default assign(new Dispatcher(), {

    handleServerAction(action) {
        const payload = {
            source: PayloadSources.SERVER_ACTION,
            action
        };

        this.dispatch(payload);
    },

    handleUserAction(action) {
        const payload = {
            source: PayloadSources.USER_ACTION,
            action
        };

        this.dispatch(payload);
    }
});
