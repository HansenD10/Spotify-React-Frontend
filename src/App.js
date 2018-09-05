import React, { Component } from 'react'
import qs from 'query-string'
import axios from 'axios'
import NavBar from './Components/NavBar/NavBar'
import PlaylistDrawer from './Components/PlaylistDrawer/PlaylistDrawer';

class App extends Component {
  constructor() {
    super()
    this.state = {
      access_token: null,
      user_data: {}
    }
  }

  validateUser = () => {
    let parsed = qs.parse(window.location.search)
    if (parsed['access_token']) 
      this.setState({access_token: parsed['access_token']})
    else
      window.location.replace('http://localhost:8080/login')
  }

  getUserInfo = (access_token) => {
    axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    }).then(({data}) => {
      console.log(data)
      this.setState({
        user_data: {
          ...this.state.user_data,
          name: data.display_name,
          href: data.href,
          image: data.images[0].url || null
        }
      })
    })
  }

  getUserPlaylists = (access_token) => {
    axios.get('https://api.spotify.com/v1/me/playlists', {
      headers: {
        'Authorization': 'Bearer ' + access_token
      }
    }).then(({data}) => {
      //Create playlist state with only neccessary items
      let playlists = data.items.map((item) => {
        return {
          name: item.name,
          image: item.images[0].url || null,
          href: item.href
        }
      })
      //Set playlist state
      this.setState({
        user_data: {
          ...this.state.user_data,
          playlists
        }
      })
    })
  }

  componentWillMount() {
    this.validateUser()
  }

  componentDidMount() {
    this.getUserInfo(this.state.access_token)
    this.getUserPlaylists(this.state.access_token)
  }

  render() {
    let { user_data } = this.state

    return (
      <div className="app">
        <NavBar name={user_data.name} imgUrl={user_data.image}/>
        <PlaylistDrawer playlists={user_data.playlists}/>
      </div>
    );
  }
}

export default App
