import React from 'react';
import './Playlist.css';
import TrackList from '../../Components/TrackList/TrackList';

// faudra ajouter <TrackList /> ultérieurement

class Playlist extends React.Component {
    state = {}
    render() {
        return (

            <div className="Playlist">
                <input defaultValue={'New Playlist'} />

                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;