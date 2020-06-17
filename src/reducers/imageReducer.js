import { GET_IMAGE, LOADING_IMAGE } from '../actions/types'

const initialState = {
    image: null,
    loading: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_IMAGE:
            return {
                ...state,
                image: action.payload,
                loading: false
            }
        case LOADING_IMAGE:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}