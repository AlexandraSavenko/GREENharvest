import OrderSteps_1x_min from "../images/OrderSteps_1x_min.jpg"
import OrderSteps_2x_min from "../images/OrderSteps_2x_min.jpg"
import '../scss/How.scss'
export default function OrderStepsSection () {
    return <section className="how-section">
        <div className="container how">
            <h2 className="visually_hidden">purchase instructions</h2>
    <div className="f-how">
    <div className='h-image-wrap'>
            <img srcSet={`${OrderSteps_2x_min}, ${OrderSteps_1x_min}`}
         src={OrderSteps_1x_min} alt="a happy woman is slicing an apple" width={200} />
         <div className="image-overlay"></div>
    </div>
    </div>
    <div className="s-how">
    <div className="h-text-wrap">
    <h2 className="orderStepsHeader">TO ORDER YOUR <span>VEGETABLE</span> BASKET, SIMPLY FOLLOW THESE <span>EASY STEPS</span></h2>
    <p className='orderStepsText'>Our baskets are assembled with care and delivered straight to your doorstep, so you can enjoy the taste of fresh fruit without ever leaving your home.</p>
    <ol className='orderStepsList'>
        <li>
            {/* <div className='orderStepNum'><span>1</span></div> */}
            <p>Just choose <span>the vegetable</span> you want to order by clicking on the checkboxes <span>next to it</span> .</p>
        </li>
        <li>
            {/* <div className='orderStepNum'><span>2</span></div> */}
            <p>Click on <span>the basket</span>  and fill out the form.</p>
        </li>
        <li>
            {/* <div className='orderStepNum'><span>3</span></div> */}
            <p>Sit back and relax! Your <span>fresh vegetable</span> basket will be delivered.</p>
        </li>
    </ol>
    </div>
    </div>
    </div>
        
    </section>
}