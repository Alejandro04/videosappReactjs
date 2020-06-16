import {  combineReducers } from 'redux'
import tracksReducer from './tracksReducer'
import albumsReducer from './albumsReducer'

export default combineReducers({
    tracks: tracksReducer,
    album: albumsReducer
})