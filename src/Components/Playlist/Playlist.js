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
                <TrackList
                    tracks={this.props.playlistTracks}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                />

                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;