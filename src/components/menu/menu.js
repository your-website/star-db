import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { elastic as Menu } from 'react-burger-menu'
import './menu.css';

class HeaderMenu extends Component {

  state = {
    isOpen: false
  };

  showSettings = () => {
    this.setState(({ isOpen }) => {
      return {
        isOpen: !isOpen
      }
    })
  };

  render() {
    const { isOpen } = this.state;
    return (
        <Menu onOpen={ this.showSettings } isOpen={ isOpen } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } right  >
          <Link onClick={ this.showSettings } id="people" className="menu-item" to="/people/">People</Link>
          <Link onClick={ this.showSettings } id="planets" className="menu-item" to="/planets/">Planets</Link>
          <Link onClick={ this.showSettings } id="starships" className="menu-item" to="/starships/">Starships</Link>
          <Link onClick={ this.showSettings } id="login" className="menu-item" to="/login">Login</Link>
          <Link onClick={ this.showSettings } id="secret" className="menu-item" to="/secret">Secret</Link>
        </Menu>
    )
  }
};

export default HeaderMenu;
