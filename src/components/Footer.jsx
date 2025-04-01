import Logo from "../images/logo.svg";
import '../scss/Footer.scss'
export default function Footer () {
    return <div className='footer'>
         <div className="container">
            <div className='footerContent'></div>
        <div className="footerLogo">
            <Logo/>
            <p className='footerText'>Whether you are looking for a healthy snack or a thoughtful gift, our fruit baskets are the perfect choice.</p>
        </div>
    <div className='footerContacts'>
        <p>+380 (68) 443-94-26</p>
        <p>1678 S.Pioneer Road Salt Lake City UT 84104</p>
    </div>
    <div className='footerPolicy'>
        <p>Privacy Policy / Cooking settings</p>
        <p>Green Harvest 2023</p>
    </div>
    </div>
    </div>
}