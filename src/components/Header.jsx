import "./Header.css"
import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => {
    return <header className="header">
        <NavLink to="/" className={({isActive, isPending}) => {
            return isActive ? 
            "header-item-active header-item" :
             isPending ? "header-item-pending header-item " :
              "header-item"
        }}>Home</NavLink>

        <NavLink  to="/about" className={({isActive, isPending}) => {
            return isActive ? 
            "header-item header-item-active" :
             isPending ? "header-item header-item-pending" :
              "header-item"
        }}>About</NavLink>
    </header>
}

export default Header