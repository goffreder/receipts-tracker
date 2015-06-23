import appDispatcher from '../dispatcher/appDispatcher';
import { EventEmitter } from 'events';
import { ServerActionTypes } from '../constants/constants';
import assign from 'react/lib/Object.assign';
import userActions from '../actions/userActions';

const events = new EventEmitter();
const CHANGE_EVENT = 'CHANGE';

let state = {};

const updateState = (newState) => {
    assign(state, newState);
    events.emit(CHANGE_EVENT);
};

const replaceState = (newState) => {
    state = newState;
    events.emit(CHANGE_EVENT);
};

const sessionStore = {
    addChangeListener(fn) {
        events.addListener(CHANGE_EVENT, fn);
    },

    removeChangeListener(fn) {
        events.removeListener(CHANGE_EVENT, fn);
    },

    getState() {
        return state;
    },

    getUsername() {
        return state.username;
    },

    getUserId() {
        return state.id;
    },

    getRole() {
        return state.role;
    },

    getHistory() {
        return state.history;
    },

    getJob() {
        return state.currentJob;
    },

    isLogged() {
        return !!state.username;
    },

    isActive() {
        return !!state.currentJob;
    },

    isReserved() {
        return !!state.isReserve;
    },

    jobStatus() {
        return state.currentJob.activityStatus;
    }
};

sessionStore.dispatchToken = appDispatcher.register((payload) => {
    const { action } = payload;

    switch (action.type) {
        case ServerActionTypes.SERVER_LOGIN_SUCCESS:
            updateState(action.userData);
            break;
        case ServerActionTypes.SERVER_LOGIN_FAILED:
            console.error(action.msg, action.error);
            break;
        case ServerActionTypes.SERVER_LOGOUT_SUCCESS:
            replaceState({});
            break;
        case ServerActionTypes.SERVER_GET_HISTORY_SUCCESS:
            updateState({
                history: action.history
            });
            break;
        case ServerActionTypes.SERVER_GET_HISTORY_FAILED:
            console.error(action.msg, action.error);
            break;
        case ServerActionTypes.SERVER_GET_CURRENT_JOB_SUCCESS:
        case ServerActionTypes.SERVER_GET_A_JOB_SUCCESS:
            updateState({
                currentJob: action.job
            });
            break;
        case ServerActionTypes.SERVER_GET_CURRENT_JOB_FAILED:
        case ServerActionTypes.SERVER_GET_A_JOB_FAILED:
            console.error(action.msg, action.error);
            break;
        case ServerActionTypes.SERVER_GET_EDIT_JOB_SUCCESS:
            const currentJob = action.activity;

            updateState({
                currentJob: currentJob
            });
            break;
        case ServerActionTypes.SERVER_GET_EDIT_JOB_FAILED:
            console.error(action.msg, action.error);
            break;
        case ServerActionTypes.SERVER_SET_COMPLETE_JOB_SUCCESS:
            userActions.userGetHistory(action.userId);
            updateState({
                currentJob: currentJob
            });
            break;
        case ServerActionTypes.SERVER_SET_COMPLETE_JOB_FAILED:
            console.error(action.msg, action.error);
            break;
        default:
            break;
    }
});

export default sessionStore;
