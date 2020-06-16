import axios from 'axios'
import { GET_ALBUM, LOADING_ALBUM } from './types'
import dotenv from 'dotenv'
dotenv.config()

const ALBUM_ID = 'alb.5153820'
const API_URL = process.env.LOCAL_ALBUM_URL
//const API_URL = `https://api.napster.com/v2.2/albums/${ALBUM_ID}/images?apikey=${process.env.API_KEY}`

export const getAlbum = () => (dispatch) => {
    dispatch(loadingAlbum())
    axios
        .get(API_URL)
        .then(res => {
            dispatch({
                type: GET_ALBUM,
                payload: res.data
            })
        })
        .catch(err => returnErrors(err.response.data, err.response.status))
}

export const loadingAlbum = () => {
    return {
        type: LOADING_ALBUM
    }
}
