import axios from 'axios'
import { GET_TRACKS, LOADING_TRACKS } from './types'
//import { returnErrors } from './errorsAction'
import dotenv from 'dotenv'
dotenv.config()

//const API_URL = process.env.REACT_APP_LOCAL_TRACKS_URL
const API_URL = `http://api.napster.com/v2.2/tracks/top?apikey=NTRhZGRjODktYWY2OS00MDg2LWFjZjEtZGYyMDMyNjU3MTE3&limit=6`

export const getTracks = () => (dispatch) => {
    dispatch(loadingTracks())
    axios
        .get(API_URL)
        .then(res => {
            dispatch({
                type: GET_TRACKS,
                payload: res.data
            })
        })
        .catch(err => console.log(err) /*returnErrors(err.response.data, err.response.status)*/)
}

export const loadingTracks = () => {
    return {
        type: LOADING_TRACKS
    }
}
