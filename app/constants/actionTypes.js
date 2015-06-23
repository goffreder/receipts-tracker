import keyMirror from 'react/lib/keyMirror';

export default {
    PayloadSources: keyMirror({
        SERVER_ACTION: null,
        USER_ACTION: null
    }),

    UserActionTypes: keyMirror({
        USER_LEFTSIDEBAR_TOGGLE: null
    }),

    ServerActionTypes: keyMirror({
        SERVER_LOAD_DATA_SUCCESS: null,
        SERVER_LOAD_DATA_FAILED: null
    })
};
