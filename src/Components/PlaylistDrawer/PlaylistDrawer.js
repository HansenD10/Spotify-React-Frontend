import React, { Component } from 'react'
import './PlaylistDrawer.css'

export default class PlaylistDrawer extends Component {  
  render() {
    let { playlists } = this.props
    return (
      <div className="drawer-wrapper">
        <p>Playlists</p>
        <hr />
        {playlists && playlists.map((playlist) => {
          return (
            <div key={playlist.href} className="playlist-wrapper">
              <img className="playlist-icon" src={playlist.image} alt="Playlist Icon"/>
              <p className="playlist-name">{playlist.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}
