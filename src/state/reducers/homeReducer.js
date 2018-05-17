import _ from 'lodash';

import {
    FETCH_DATA_PENDING,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions/homeActions';

const initialState = {
    data: [],
    status: 'NOT_STARTED',
    error: {}
};

const homeReducer = function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_DATA_PENDING: {
            return _.assign({}, state, { status: 'LOADING' });
        }

        case FETCH_DATA_SUCCESS: {

            return _.assign({}, state, { status: 'SUCCESS' });
        }

        case FETCH_DATA_FAILURE: {
            return { ...state, status: 'ERROR', error: payload };
        }

        default: {
            return state;
        }
    }
};

export default homeReducer;
