import { GET_ALBUM, LOADING_ALBUM } from '../actions/types'

const initialState = {
    album: "",
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALBUM:
            return {
                ...state,
                album: action.payload,
                loading: false
            }
        case LOADING_ALBUM:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}