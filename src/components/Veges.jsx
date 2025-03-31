import EggPlant_1x_min from "../images/EggPlant_1x_min.jpg"
import EggPlant_2x_min from "../images/EggPlant_2x_min.jpg"
import Leek_1x_min from "../images/Leek_1x_min.jpg"
import Leek_2x_min from "../images/Leek_2x_min.jpg"
import Mushrooms_1x_min from "../images/Mushrooms_1x_min.jpg"
import Mushrooms_2x_min from "../images/Mushrooms_2x_min.jpg"
import Corn_1x_min from "../images/Corn_1x_min.jpg"
import Corn_2x_min from "../images/Corn_2x_min.jpg"
import SweetPotato_1x_min from "../images/SweetPotato_1x_min.jpg"
import SweetPotato_2x_min from "../images/SweetPotato_2x_min.jpg"
import Carrot_1x_min from "../images/Carrot_1x_min.jpg"
import Carrot_2x_min from "../images/Carrot_2x_min.jpg"
import "../scss/Veges.scss"
export default function Veges(){
    return <section className="veges">
    <div className='container organicVege'>
<h2>ORGANIC <span >VEGETABLES</span ></h2>
<p>Our organic vegetables are hand-picked from local farms and delivered straight to your doorstep, ensuring that you get the freshest and most nutritious product possible.</p>
    <ul className='vegeList'>
        <li>
            <h3>eggplant</h3>
            <p>60 UAH / KG</p>
            <img srcSet={`${EggPlant_2x_min}, ${EggPlant_2x_min}`} 
                src={EggPlant_1x_min}
                alt="beautiful vegetables"
                width={200} />
        </li>
        <li>
            <h3>leek</h3>
            <p>50 UAH / KG</p>
            <img srcSet={`${Leek_2x_min}, ${Leek_2x_min}`} 
                src={Leek_1x_min}
                alt="beautiful vegetables"
                width={200} />
        </li>
        <li>
            <h3>mushrooms</h3>
            <p>40 UAH / KG</p>
            <img srcSet={`${Mushrooms_2x_min}, ${Mushrooms_2x_min}`} 
                src={Mushrooms_1x_min}
                alt="beautiful vegetables"
                width={200} />
        </li>
        <li>
            <h3>corn</h3>
            <p>60 UAH / KG</p>
            <img srcSet={`${Corn_2x_min}, ${Corn_2x_min}`} 
                src={Corn_1x_min}
                alt="beautiful vegetables"
                width={200} />
        </li>
        <li>
            <h3>sweet potatoes</h3>
            <p>50 UAH / KG</p>
            <img srcSet={`${SweetPotato_2x_min}, ${SweetPotato_2x_min}`} 
                src={SweetPotato_1x_min}
                alt="beautiful vegetables"
                width={200} />
        </li>
        <li>
            <h3>carrot</h3>
            <p>40 UAH / KG</p>
            <img srcSet={`${Carrot_2x_min}, ${Carrot_2x_min}`} 
                src={Carrot_1x_min}
                alt="beautiful vegetables"
                width={200} />
        </li>
    </ul>
    </div>
    </section>
}