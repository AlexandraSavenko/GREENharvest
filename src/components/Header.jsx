import Logo from "./Logo";
import '../scss/Header.scss'
export default function Header (){
    return <header>
        <div className="container">
            <div className="header-wrap">
        {/* <Logo/> */}
        <p>GREEN HARVEST</p>
        <nav className="header-nav">
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