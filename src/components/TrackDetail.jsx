import React from 'react';
import Track from './Track'

export default (props) => {
    console.log(props)
    return (
        <div>
            <h2>Track Detail</h2>
            <div className="tracksDetailContainer">
                <Track />
            </div>
        </div>
    );
};