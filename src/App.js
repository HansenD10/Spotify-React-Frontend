import React, { Component } from 'react'
import qs from 'query-string'

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

  
  componentWillMount() {
    this.validateUser()
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App
