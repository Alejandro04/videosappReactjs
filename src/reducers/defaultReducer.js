import { DEFAULT_REDUCER } from '../actions/types'

const initialState = {
    default: [],
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case DEFAULT_REDUCER:
            return {
                ...state,
                default: action.payload,
                loading: false
            }
        default:
            return state
    }
}