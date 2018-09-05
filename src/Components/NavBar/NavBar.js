import React, { Component } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import './NavBar.css'
import UserInfo from '../UserInfo/UserInfo';

export default class NavBar extends Component {
  render() {
    let { name, imgUrl } = this.props

    return (
      <div className="nav-wrapper">
        <p className="nav-brand">Spotify React</p>
        <SearchBar />
        <UserInfo name={name} imgUrl={imgUrl} />
      </div>
    )
  }
}
