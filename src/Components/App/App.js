import React from 'react';
import './App.css';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResults from '../../Components/SearchResults/SearchResults';
import Playlist from '../../Components/Playlist/Playlist';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        { name: 'name 1', artist: 'artist 1', album: 'album 1', id: 1 },
        { name: 'name 2', artist: 'artist 2', album: 'album 2', id: 2 },
        { name: 'name 3', artist: 'artist 3', album: 'album 3', id: 3 }
      ],
      playlistName: 'My First Playlist',
      playlistTracks: [
        { name: 'name 1', artist: 'artist 1', album: 'album 1', id: 1 },
        { name: 'name 2', artist: 'artist 2', album: 'album 2', id: 2 },
        { name: 'name 3', artist: 'artist 3', album: 'album 3', id: 3 }
      ]
    }
  }

  //method called addTrack that accepts a track argument

  addTrack(track) {

    let tracks = this.state.playlistTracks;
    //Use track’s id property to check if the current song is in the playlistTracks state.
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    track.push(track);
    this.setState({ playlistTracks: tracks });
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
