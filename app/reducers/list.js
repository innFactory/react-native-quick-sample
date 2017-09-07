/**
 * Created by toni on 07.09.2017.
 */
import createReducer from "./createReducer";
import * as types from "../actions/types";


export const list = createReducer([], {

    [types.ADD_ITEM](state, action) {
        return [...state, action.item];
    },

    [types.DELETE_ALL_ITEMS](state, action) {

        return [];
    },
});


export const listSize = createReducer(0, {
    [types.ADD_ITEM](state, action) {

        return ++state;
    },

    [types.DELETE_ALL_ITEMS](state, action) {
        return 0;
    }
});