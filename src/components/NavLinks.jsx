import clsx from "clsx";
import {Link} from 'react-scroll'
import '../scss/NavLinks.scss'
export default function NavLinks ({location, onMenuOpen}){
    const list = clsx({
        headerList: location === 'header',
        footerList: location === 'footer',
    }
      );
      const item = clsx({
        headerItem: location === 'header',
        footerItem: location === 'footer',
    }
      );
     
    return <ul className={list}>
    <li><Link to="how" smooth='true' duration={500} className={item} onClick={onMenuOpen}>how it works</Link></li>
    <li><Link to="veges" smooth='true' duration={500} className={item} onClick={onMenuOpen}>vegetables</Link></li>
    <li><Link to="reviews" smooth='true' duration={500} className={item} onClick={onMenuOpen}>reviews</Link></li>
</ul>
}

