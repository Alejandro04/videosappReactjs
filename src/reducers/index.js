import {  combineReducers } from 'redux'
import tracksReducer from './tracksReducer'
import imageReducer from './imageReducer'

export default combineReducers({
    tracks: tracksReducer,
    image: imageReducer
})