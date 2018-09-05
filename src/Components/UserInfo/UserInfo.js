import React, { Component } from 'react'
import './UserInfo.css'

export default class UserInfo extends Component {
  render() {
    let { name, imgUrl } = this.props
    let iconStyle = {
      backgroundImage: `url(${imgUrl})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      height: '3rem',
      width: '3rem',
      borderRadius: '50%',
      border: '2px solid #66FCF1',
      margin: 'auto 0'
    }

    return (
      <div className="user-nav-info">
        <div style={iconStyle} ></div>
        <p>{name}</p>
      </div>
    )
  }
}
