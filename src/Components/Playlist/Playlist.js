import React from 'react';
import './Playlist.css';
import TrackList from '../../Components/TrackList/TrackList';



class Playlist extends React.Component {

    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    //The method should accept an event that is triggered by an onChange attribute on <input> element.  
    handleNameChange(event) {
        // call .onNameChange() with the event target’s value (from the <input> element).
        this.props.onNameChange(event.target.value);
    }

    render() {
        return (

            <div className="Playlist">
                <input defaultValue={'New Playlist'} />
                <TrackList
                    tracks={this.props.playlistTracks}
                    onAdd={this.props.onAdd}
                    onRemove={this.props.onRemove}
                    isRemoval={true}
                    onChange={this.handleNameChange}
                />

                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;