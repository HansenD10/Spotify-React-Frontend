import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <p className="nav-brand">Spotify React</p>
        <SearchBar />
      </div>
    )
  }
}
