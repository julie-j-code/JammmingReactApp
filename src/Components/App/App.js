import React from 'react';
import './App.css';
import SearchBar from '../../Components/SearchBar/SearchBar';
import SearchResults from '../../Components/SearchResults/SearchResults';
import Playlist from '../../Components/Playlist/Playlist';
import Spotify from '../../util/Spotify.js';


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

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
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

  // Filters tracks that already are on the playlist
  // Uses the track’s id property to filter it out of playlistTracks
  // Sets the new state of the playlist
  removeTrack(track) {
    const newPlaylistTracks = this.state.playlistTracks.filter(
      savedTrack => savedTrack.id !== track.id
    );

    this.setState({
      playlistTracks: newPlaylistTracks
    });
  }
  //  Accepts a name argument
  //  Sets the state of the playlist name to the input argument
  updatePlaylistName(name) {
    this.setState({ playlistName: name });
  }


  // after importing Spotify 
  // update the .savePlaylist() method to call Spotify.savePlaylist().
  savePlaylist() {
    const trackURIs = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackURIs);
    // After you call Spotify.savePlaylist(),
    // reset the state of playlistName to 'New Playlist' 
    // and playlistTracks to an empty array.
    this.setState({
      searchResults: []
    });
    this.updatePlaylistName("New Playlist");
    console.info(trackURIs);
  }



  // after importing Spotify update the .search() method with the Spotify.search() method.
  search(term) {
    Spotify.search(term).then(searchResults =>
      // Update the state of searchResults with the value resolved from Spotify.search()‘s promise
      this.setState({
        searchResults: searchResults
      }));
  }


  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName}
              onSave={this.savePlaylist}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
