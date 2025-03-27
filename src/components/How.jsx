import OrderSteps_1x_min from "../images/OrderSteps_1x_min.jpg"
import OrderSteps_2x_min from "../images/OrderSteps_2x_min.jpg"
import '../scss/How.scss'
export default function OrderStepsSection () {
    return <section className="how-section">
        <div className="container h-wrapper">
            <h2 className="visually_hidden">purchase instructions</h2>
    <div className='h-image-wrap'>
            <img className='' srcSet={`${OrderSteps_2x_min}, ${OrderSteps_1x_min}`}
         src={OrderSteps_1x_min} alt="a happy woman is slicing an apple" width={200} />
         <div className="image-overlay"></div>
    </div>
    <div className="h-text-wrap">
        <h2>TO ORDER YOUR <span>VEGETABLE</span> BASKET, SIMPLY FOLLOW THESE <span>EASY STEPS</span></h2>
    <p className=''>Our baskets are assembled with care and delivered straight to your doorstep, so you can enjoy the taste of fresh fruit without ever leaving your home.</p>
    <ul className=''>
        <li>
            <div className=''><span>1</span></div>
            <p>Just choose <span>the vegetable</span> you want to order by clicking on the checkboxes <span>next to it</span> .</p>
        </li>
        <li>
            <div className=''><span>2</span></div>
            <p>Click on <span>the basket</span>  and fill out the form.</p>
        </li>
        <li>
            <div className=''><span>3</span></div>
            <p>Sit back and relax! Your <span>fresh vegetable</span> basket will be delivered.</p>
        </li>
    </ul>
    </div>

    </div>
        
    </section>
}