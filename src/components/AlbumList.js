import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
	state = { albums: [] }; // Initial base empty state for Albums list

	componentWillMount() { // When View loads
		axios.get('https://rallycoding.herokuapp.com/api/music_albums')
			.then(response => this.setState({ albums: response.data })); // Set response to albums array
	}

	renderAlbums() {
     return (
         <ScrollView>{ 
             this.state.albums.map(album =>
             <AlbumDetail key={album.title} album={album} />
         )}</ScrollView>
     );
 }
 
    render() {
     return this.renderAlbums();
    }
}

export default AlbumList;
