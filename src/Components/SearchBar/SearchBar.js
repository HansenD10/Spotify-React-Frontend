import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search_string: '',
    }
  }


  render() {
    return (
      <form className="search-wrapper">
        <input />
        <p className="search-button">Search</p>
      </form>
    )
  }
}
