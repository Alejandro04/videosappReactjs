import { GET_TRACKS, LOADING_TRACKS } from '../actions/types'

const initialState = {
    tracks: [],
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TRACKS:
            return {
                ...state,
                tracks: action.payload.tracks,
                loading: false
            }
        case LOADING_TRACKS:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}