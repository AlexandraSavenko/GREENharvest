import clsx from "clsx";
import '../scss/NavLinks.scss'
export default function NavLinks ({location}){
    const list = clsx({
        header: location === 'header',
        footerList: location === 'footer',
    }
      );
      const item = clsx({
        header: location === 'header',
        footerItem: location === 'footer',
    }
      );
     
    return <ul className={list}>
    <li><a className={item} href='#how'>how it works</a></li>
    <li><a className={item} href='#veges'>vegetables</a></li>
    <li><a className={item} href='#reviews'>reviews</a></li>
</ul>
}


