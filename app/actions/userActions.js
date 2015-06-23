import serverActions from './serverActions';

import { UserActionTypes } from '../constants/actionTypes';

import appDispatcher from '../dispatcher/appDispatcher';

export default {
    userLoadData() {
        serverActions.serverLoadData();
    },

    userLeftSideBarToggle() {
        appDispatcher.handleUserAction({
            type: UserActionTypes.USER_LEFTSIDEBAR_TOGGLE
        });
    }
};
