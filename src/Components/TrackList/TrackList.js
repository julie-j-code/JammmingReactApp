import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';




// You will add a map method that renders a set of Track components
// use of the .map() method to render each track in the tracks property.

class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map(track => <Track track={track} key={track.id} />)}
            </div>
        );
    }
}

export default TrackList;