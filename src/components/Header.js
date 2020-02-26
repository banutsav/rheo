import React from 'react'
import Scroll from './Scroll'
import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="icon major style3 fa-laptop"></span>
        <h1>Hello!</h1>
        <p>Welcome to Rheo Computing</p>
        <Scroll type="id" element="intro">
        <span className="button">Learn More</span>
        </Scroll>
    </header>
)

export default Header
