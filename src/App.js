import React, { Component } from 'react'
import qs from 'query-string'
import axios from 'axios'
import NavBar from './Components/NavBar/NavBar'

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

  getUserInfo = () => {
    axios.get('https://api.spotify.com/v1/me', {
      headers: {
        'Authorization': 'Bearer ' + this.state.access_token
      }
    }).then(({data}) => {
      this.setState({
        user_data: {
          name: data.display_name,
          href: data.href,
          image: data.images[0].url || null
        }
      })
    })
  }


  componentWillMount() {
    this.validateUser()
  }

  componentDidMount() {
    this.getUserInfo()
  }

  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

export default App
