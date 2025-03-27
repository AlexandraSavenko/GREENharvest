import Logo from "../images/logo.svg";
import '../scss/Header.scss'
import { useState } from "react";
import clsx from "clsx";
import Burger from '../images/burger-min.svg'

export default function Header (){
    const [navOpen, setNavOpen] = useState(false)
    return <header>
        <div className="container">
            <div className="header-wrap">
        <Logo/>
        <div className="b-menu" onClick={()=>{
            setNavOpen(!navOpen)
        }}>
            <Burger/>
        </div>
        <nav className={clsx('header-nav', navOpen && 'open')}>
            <ul className="header-menu-list">
                <li><a className="header-menu-link" href='#how'>how it works</a></li>
                <li><a className="header-menu-link" href='#veges'>vegetables</a></li>
                <li><a className="header-menu-link" href='#reviews'>reviews</a></li>
            </ul>
            <button className="header-btn">shop now</button>
        </nav>
        </div>
        </div>
    </header>
}