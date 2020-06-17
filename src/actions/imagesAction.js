import axios from 'axios'
import { GET_IMAGE, LOADING_IMAGE } from './types'
import dotenv from 'dotenv'
dotenv.config()

//const API_URL = process.env.REACT_APP_LOCAL_ALBUM_URL

export const getImage = albumID => (dispatch) => {
    
    const API_URL = `http://api.napster.com/v2.2/albums/${albumID}/images?apikey=NTRhZGRjODktYWY2OS00MDg2LWFjZjEtZGYyMDMyNjU3MTE3`
    dispatch(loadingImage())

    axios
        .get(API_URL)
        .then(res => {
            dispatch({
                type: GET_IMAGE,
                payload: res.data.images[0].url
            })
        })
        .catch(err => console.log(err)/*returnErrors(err.response.data, err.response.status)*/)
}

export const loadingImage = () => {
    return {
        type: LOADING_IMAGE
    }
}
