import React from 'react'
import './VideoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker';

const VideoFooter = ({ channel, description, song }) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>{channel}</h3>
                <p>{description}</p>
                <div className="videoFooter_ticker">
                    <MusicNoteIcon className="videoFooter_icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                            <h4 className="videoFooter_song">{song}</h4>
                            </>

                        )}
                    </Ticker>
                </div>
            </div>
            <img src="https://static.thenounproject.com/png/934821-200.png" alt="" className="videoFooter_record" />
        </div>
    )
}

export default VideoFooter
