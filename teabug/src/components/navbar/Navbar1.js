import React from 'react'
import './Navbar.scss'

export const Navbar1 = () => {
    return (
        <nav id="nav1">
            <ul>
                <li id="logo">
                    <a href="#" onclick="animatePixels(this)" class="focused"
                    ><div id="logomark"></div>
                        <span id="logotype">teabug</span></a
                    >
                </li>
                <li><a href="#" onclick="animatePixels(this)">about</a></li>
                <li><a href="#" onclick="animatePixels(this)">services</a></li>
                <li>
                    <a href="#" onclick="animatePixels(this)">tech stack</a>
                </li>
                <li><a href="#" onclick="animatePixels(this)">workflow</a></li>
                <li><a href="#" onclick="animatePixels(this)">contact</a></li>
            </ul>
        </nav>
    )
}
