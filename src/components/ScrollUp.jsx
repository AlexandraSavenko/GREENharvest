import { CiSaveUp1 } from "react-icons/ci";
import '../scss/ScrollUp.scss'
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function ScrollUp (){
    const [isVisible, setIsVisible] = useState(false)
console.log(isVisible)
    const trackScroll = () => {
            if(scrollY > 100){
                setIsVisible(true)
            }else{
                setIsVisible(false)
            }
        }
    useEffect(()=>{        
        window.addEventListener('scroll', trackScroll)
        return () => {window.removeEventListener('scroll', trackScroll)}
    }, [isVisible])
    const goTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
return <div className={clsx("scroll-up", isVisible && "scroll-up-show")} onClick={goTop}>
<CiSaveUp1 className="up-icon"/>
</div>
}
