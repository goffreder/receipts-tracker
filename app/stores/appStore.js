import appDispatcher from '../dispatcher/appDispatcher';
import { EventEmitter } from 'events';
import { UserActionTypes, ServerActionTypes } from '../constants/actionTypes';
import assign from 'react/lib/Object.assign';

const events = new EventEmitter();
const CHANGE_EVENT = 'CHANGE';

const state = {
    leftSideBarOpen: false,
    receipts: [],
    stores: [],
    products: []
};

const updateState = (newState) => {
    assign(state, newState);
    events.emit(CHANGE_EVENT);
};

// const replaceState = (newState) => {
//     state = newState;
//     events.emit(CHANGE_EVENT);
// };

const appStore = {
    addChangeListener(fn) {
        events.addListener(CHANGE_EVENT, fn);
    },

    removeChangeListener(fn) {
        events.removeListener(CHANGE_EVENT, fn);
    },

    getState() {
        return state;
    }
};

appStore.dispatchToken = appDispatcher.register((payload) => {
    const { action } = payload;

    switch (action.type) {
        case UserActionTypes.USER_LEFTSIDEBAR_TOGGLE:
            updateState({
                leftSideBarOpen: !state.leftSideBarOpen
            });
            break;

        case ServerActionTypes.SERVER_LOAD_DATA_SUCCESS:
            updateState({
                stores: action.stores,
                receipts: action.receipts,
                products: action.products
            });
            break;
        case ServerActionTypes.SERVER_LOAD_DATA_FAILED:
            console.error(action.type, action);
            break;
        default:
            break;
    }
});

export default appStore;
